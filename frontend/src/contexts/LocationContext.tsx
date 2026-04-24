import React, { createContext, useContext, useEffect, useState } from "react";

type LocationContextType = {
  location: string | null;
  loading: boolean;
  error: string | null;
};

const LocationContext = createContext<LocationContextType | null>(null);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [location, setLocation] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchLocation = async (latitude: number, longitude: number) => {
      try {
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );

        const data = await response.json();

        const city = data.city || data.locality || data.principalSubdivision || null;
        setLocation(city);
      } catch (err) {
        setError("Failed to fetch location");
      } finally {
        if (!isMounted) return;
        setLoading(false);
      }
    };

    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchLocation(position.coords.latitude, position.coords.longitude);
      },
      () => {
        setError("Location permission denied");
        setLoading(false);
      }
    );

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <LocationContext.Provider value={{ location, loading, error }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error("useLocation must be used within LocationProvider");
  }

  return context;
};

export default LocationContext;
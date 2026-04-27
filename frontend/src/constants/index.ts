import banner1 from "../../assets/banners/banner1.jpg";
import banner2 from "../../assets/banners/banner2.avif";
import banner3 from "../../assets/banners/banner3.avif";
import banner4 from "../../assets/banners/banner4.avif";

import movie1 from "../../assets/movies/m1.avif";
import movie2 from "../../assets/movies/m2.avif";
import movie3 from "../../assets/movies/m3.avif";
import movie4 from "../../assets/movies/m4.avif";
import movie5 from "../../assets/movies/m5.avif";
import movie6 from "../../assets/movies/m6.avif";
import movie7 from "../../assets/movies/m7.avif";
import movie8 from "../../assets/movies/m8.avif";
import movie9 from "../../assets/movies/m9.avif";
import movie10 from "../../assets/movies/m10.avif";
import movie11 from "../../assets/movies/m11.avif";
import movie12 from "../../assets/movies/m12.avif";

import event1 from "../../assets/events/e1.avif";
import event2 from "../../assets/events/e2.avif";
import event3 from "../../assets/events/e3.avif";
import event4 from "../../assets/events/e4.avif";
import event5 from "../../assets/events/e5.avif";

import inox from "../../assets/inox.avif";

export const BANNERS = [banner1, banner2, banner3, banner4];

export const MOVIES = [
    {
        id: 1,
        title: "MAA",
        poster: movie1,
        rating: 4.5,
        tags: ["Action", "Thriller"]
    },
    {
        id: 2,
        title: "KONNAPPA",
        poster: movie2,
        rating: 4.0,
        tags: ["Drama", "Family"]
    },
    {
        id: 3,
        title: "MISSION IMPOSIBLE",
        poster: movie3,
        rating: 3.5,
        tags: ["Action", "Adventure"]
    },
    {
        id: 4,
        title: "THE MOVIE",
        poster: movie4,
        rating: 5.0,
        tags: ["Action", "Adventure"]
    },
    {
        id: 5,
        title: "BALLERINA",
        poster: movie5,
        rating: 4.2,
        tags: ["Drama", "Romance"]
    },
    {
        id: 6,
        title: "MEGAN 2.0",
        poster: movie6,
        rating: 3.8,
        tags: ["Action", "Sci-Fi"]
    },
    {
        id: 7,
        title: "HOUSEFULL 5",
        poster: movie7,
        rating: 4.7,
        tags: ["Comedy", "Family"]
    },
    {
        id: 8,
        title: "SITARE JAMIN PAR",
        poster: movie8,
        rating: 4.1,
        tags: ["Drama", "Romance"]
    },
    {
        id: 9,
        title: "NARUTO",
        poster: movie9,
        rating: 3.9,
        tags: ["Action", "Adventure"]

    },
    {
        id: 10,
        title: "25 YEARS LATER",
        poster: movie10,
        rating: 4.3,
        tags: ["Drama", "Sci-Fi"]
    },
    {
        id: 11,
        title: "SINNERS",
        poster: movie11,
        rating: 4.0,
        tags: ["Drama", "Thriller"]
    },
    {
        id: 12,
        title: "KESARI CHAPTER 2",
        poster: movie12,
        rating: 3.7,
        tags: ["Drama", "Action"]
    },
]

export const EVENTS = [
    {
        id: 1,
        image: event1
    },
    {
        id: 2,
        image: event2
    },
    {
        id: 3,
        image: event3
    },
    {
        id: 4,
        image: event4
    },
    {
        id: 5,
        image: event5
    },
]

export const LANGUAGES = ["English", "Hindi", "Tamil", "Telugu", "Kannada", "Malayalam"];

export const GENRES = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "Thriller"];

export const FORMATES = ["2D", "3D", "IMAX", "4DX", "MX4D", "DOLBY CINEMA", "GOLD CLASS", "SILVER CLASS", "PLATINUM CLASS", "ICE"];

export const Filters = ["2D", "3D", "IMAX", "4DX", "MX4D", "DOLBY CINEMA", "GOLD CLASS", "SILVER CLASS", "PLATINUM CLASS", "ICE"];

export const theatres = [
    {
        id: 1,
        name: "PVR Cinemas",
        distance: "2.5 km",
        cancellation: "Free cancellation",
        img: inox,
        timings: [{
            time: "10:00 AM",
            label: "RECLINERS"
        },
        {
            time: "1:00 PM",
            label: "RECLINERS"
        },
        {
            time: "4:00 PM",
            label: "RECLINERS"
        },
        {
            time: "7:00 PM",
            label: "RECLINERS"
        },
        {
            time: "10:00 PM",
            label: "RECLINERS"
        }
    ]
    },
    {
        id: 2,
        name: "INOX",
        distance: "3.2 km",
        cancellation: "Free cancellation",
        img: inox,
        timings: [{
            time: "11:00 AM",
            label: "GOLD CLASS"
        },
        {
            time: "2:00 PM",
            label: "GOLD CLASS"
        },
        {
            time: "5:00 PM",
            label: "GOLD CLASS"
        },
        {
            time: "8:00 PM",
            label: "GOLD CLASS"
        },
        {
            time: "11:00 PM",
            label: "GOLD CLASS"
        }
    ]
    },
    {
        id: 3,
        name: "Cinepolis",
        distance: "4.0 km",
        cancellation: "Free cancellation",
        img: inox,
        timings: [{
            time: "9:00 AM",
            label: "SILVER CLASS"
        },
        {
            time: "12:00 PM",
            label: "SILVER CLASS"
        },
        {
            time: "3:00 PM",
            label: "SILVER CLASS"
        },
        {
            time: "6:00 PM",
            label: "SILVER CLASS"
        },
        {
            time: "9:00 PM",
            label: "SILVER CLASS"
        }
    ]
    }
]

export const tabs = ["Profile", "Your Orders"];
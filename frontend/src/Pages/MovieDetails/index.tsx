import movie4 from '../../../assets/movies/m4.avif';
import { Filters } from '../../constants';
import TheaterTimings from './TheaterTiming';

const movie = {
    id: 4,
    title: "THE MOVIE",
    poster: movie4,
    rating: 5.0,
    votes: "12.5k",
    genres: ["Action", "Adventure"],
    releaseDate: "2024-01-01",
    duration: "2h 30m",
    languages: ["English", "Hindi"],
    format: ["2D", "3D"],
    certificate: "U/A",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

const index = () => {
    return (
        <div>
            <div className="relative text-white" style={{ backgroundImage: `url(${movie.poster})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='bg-black/70'>
                    <div className="max-w-7xl relative mx-auto bd-red-500 px-4 py-4 md:px-0 md:py-8 flex flex-col md:flex-row gap-8">
                        <img src={movie.poster} alt={movie.title} className="w-[200px] h-[400px] object-cover" />
                        <div className="flex flex-col justify-start gap-2">
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{movie.title}</h1>
                            <div className="flex items-center gap-2">
                                <div className="bg-[#3a3a3a] px-2 py-1 rounded-md flex items-center gap-2">
                                    <span className='text-pink-500'>⭐ {movie.rating}</span>
                                    <span className='text-gray-300'>{movie.votes} votes</span>
                                    <button className='cursor-pointer bg-[#2f2f2f] text-white text-xs ml-6 px-4 py-2 rounded-md hover:bg-[#4a4a4a]'>Rate Now</button>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-[#3a3a3a] px-2 py-1 rounded-md flex items-center gap-2">
                                    {movie.languages.map((language, index) => (
                                        <span key={index} className='text-gray-300 text-sm'>
                                            {language} {index !== movie.languages.length - 1 && '|'}
                                        </span>
                                    ))}
                                </div>
                                <div className="bg-[#3a3a3a] px-2 py-1 rounded-md flex items-center gap-2">
                                    {movie.format.map((format, index) => (
                                        <span key={index} className='text-gray-300 text-sm'>
                                            {format} {index !== movie.format.length - 1 && '|'}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm mb-2">
                                {movie.genres.join(", ")} | {movie.duration} | {movie.certificate} | {movie.releaseDate}
                            </p>
                            <div>
                                <h4 className='text-xl font-bold mb-2'>About the movie</h4>
                                <p className='text-sm text-gray-300'>{movie.description}</p>
                            </div>
                            {/* share button */}
                            <div className="absolute top-4 md:top-8 right-0 cursor-pointer">
                                <button
                                    className="cursor-pointer bg-[#3a3a3a] px-4 py-2 rounded-full
            text-sm flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77l-7.13-4.21c.05-.25.09-.51.09-.78s-.03-.53-.09-.78l7.04-4.15c.54.5 1.25.81 2.05.81 1.66 0 3-1.34 3-3S19.66 2 18 2s-3 1.34-3 3c0 .27.04.52.09.78L7.91 9.93C7.38 9.43 6.67 9.12 5.87 9.12 4.21 9.12 2.87 10.46 2.87 12.12s1.34 3 3 3c.8 0 1.51-.31 2.04-.81l7.13 4.21c-.06.24-.1.49-.1.75 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z" />
                                    </svg>
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-8">
                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                    {Filters.map((filter, i) => (
                        <button
                            className="border border-gray-300 px-5 py-1 rounded-lg
                    cursor-pointer text-sm hover:bg-gray-100"
                            key={i}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <hr className="my-2 border-gray-200" />

                {/* Avalability Status  */}
                <div className="flex items-center gap-4 rounded-s-sm mb-1 py-2 text-sm px-8 bg-gray-200">
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 mr-1 bg-black rounded-full inline-block"></span>
                        <small className="font-semibold text-gray-500">Available</small>
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 mr-1 font-semibold bg-yellow-400 rounded-full inline-block"></span>
                        <small className="font-semibold text-gray-500">Filling fast</small>
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 mr-1 font-semibold bg-red-400 rounded-full inline-block"></span>
                        <small className="font-semibold text-gray-500"> Almost full</small>
                    </span>
                </div>

                <hr className="my-2 border-gray-200" />

                <TheaterTimings />
            </div>
        </div>
    )
}

export default index
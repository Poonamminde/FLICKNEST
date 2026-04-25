import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { LANGUAGES, GENRES, FORMATES } from '../../constants';

const Filter = () => {
    const [isOpenLanguage, setIsOpenLanguage] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
    const [isOpenGenre, setIsOpenGenre] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState<string[]>([]);
    const [isOpenFormat, setIsOpenFormat] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState<string[]>([]);

    const toggleLanguage = (language: string) => {
        if (selectedLanguage.includes(language)) {
            setSelectedLanguage(selectedLanguage.filter((l) => l !== language));
        } else {
            setSelectedLanguage([...selectedLanguage, language]);
        }
    }

    const toggleGenre = (genre: string) => {
        if (selectedGenre.includes(genre)) {
            setSelectedGenre(selectedGenre.filter((g) => g !== genre));
        } else {
            setSelectedGenre([...selectedGenre, genre]);
        }
    }

    const toggleFormat = (format: string) => {
        if (selectedFormat.includes(format)) {
            setSelectedFormat(selectedFormat.filter((f) => f !== format));
        } else {
            setSelectedFormat([...selectedFormat, format]);
        }
    }

    return (
        <div className='space-y-4'>
            <h2 className='font-semibold text-lg'>Filters</h2>
            <div className='space-y-4 text-sm text-red-700'>
                <div className='bg-white rounded p-4 space-y-2'>
                    <div className='flex justify-between items-center cursor-pointer'>
                        <div className='flex justify-between items-center gap-2' onClick={() => setIsOpenLanguage(!isOpenLanguage)}>
                            {isOpenLanguage ? <FaChevronUp className='text-gray-500 text-xs' /> : <FaChevronDown className='text-gray-500 text-xs' />}
                            <span className={!isOpenLanguage ? 'text-gray-700' : ''}>
                                Language
                            </span>
                        </div>
                        <button className='text-gray-500 text-xs' onClick={() => setSelectedLanguage([])}>Clear</button>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {isOpenLanguage && LANGUAGES.map((language) => (
                            <span
                                key={language}
                                className={`border border-gray-300 px-2 py-1 cursor-pointer rounded-xs ${selectedLanguage.includes(language)
                                    ? "bg-red-500 text-white"
                                    : ""
                                    }`}
                                onClick={() => toggleLanguage(language)}
                            >
                                {language}
                            </span>
                        ))}
                    </div>
                </div>

                <div className='bg-white rounded p-4 space-y-2'>
                    <div className='flex justify-between items-center cursor-pointer'>
                        <div className='flex justify-between items-center gap-2' onClick={() => setIsOpenGenre(!isOpenGenre)}>
                            {isOpenGenre ? <FaChevronUp className='text-gray-500 text-xs' /> : <FaChevronDown className='text-gray-500 text-xs' />}
                            <span className={!isOpenGenre ? 'text-gray-700' : ''}>
                                Genres
                            </span>
                        </div>
                        <button className='text-gray-500 text-xs' onClick={() => setSelectedGenre([])}>Clear</button>
                    </div>
                    <div className='flex flex-wrap gap-2 mt-2'>
                        {isOpenGenre && GENRES.map((genre) => (
                            <span
                                key={genre}
                                className={`border border-gray-300 px-2 py-1 cursor-pointer rounded-xs ${selectedGenre.includes(genre)
                                        ? "bg-red-500 text-white"
                                        : ""
                                    }`}
                                onClick={() => toggleGenre(genre)}
                            >
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>

                <div className='bg-white rounded p-4 space-y-2'>
                    <div className='flex justify-between items-center cursor-pointer'>
                        <div className='flex justify-between items-center gap-2' onClick={() => setIsOpenFormat(!isOpenFormat)}>
                            {isOpenFormat ? <FaChevronUp className='text-gray-500 text-xs' /> : <FaChevronDown className='text-gray-500 text-xs' />}
                            <span className={!isOpenFormat ? 'text-gray-700' : ''}>
                                Formats
                            </span>
                        </div>
                        <button className='text-gray-500 text-xs' onClick={() => setSelectedFormat([])}>Clear</button>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {isOpenFormat && FORMATES.map((format) => (
                            <span
                                key={format}
                                className={`border border-gray-300 px-2 py-1 cursor-pointer rounded-xs ${selectedFormat.includes(format)
                                        ? "bg-red-500 text-white"
                                        : ""
                                    }`}
                                onClick={() => toggleFormat(format)}
                            >
                                {format}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Filter
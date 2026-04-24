import LOGO from '../../../assets/logo1.png';
import { FaSearch, FaChevronDown, FaBars } from 'react-icons/fa';
import { useLocation } from '../../contexts/LocationContext';


const Header = () => {
    const { location, loading, error } = useLocation();
    return (
        <div>
            <div className='flex justify-between px-4 md:px-8 py-2'>
                <div className='flex items-center gap-2 flex-grow'>
                    <img src={LOGO} alt="Logo" className='h-12' />
                    <div className='flex justify-between items-center border border-gray-300 rounded-md px-2 py-1 my-2 w-[45vw]'>
                        <FaSearch className='inline-block ml-2 text-gray-500' />
                        <input type="text" placeholder='Search for Movies, Events, Plays, Sports and Activities' className="border-none outline-none bg-transparent flex-grow ml-2" />
                    </div>
                </div>
                <div className='flex justify-between items-center gap-4 text-sm'>
                    <div>
                        <div className='flex justify-between items-center gap-2'>
                            {loading && <svg width="28" height="28" viewBox="0 0 100 100">
                                <g fill="none" stroke="currentColor" stroke-width="3">

                                    <path d="M50 10 C35 10, 25 22, 25 35 C25 55, 50 85, 50 85 C50 85, 75 55, 75 35 C75 22, 65 10, 50 10 Z" />

                                    <circle cx="50" cy="35" r="5" fill="currentColor">
                                        <animate attributeName="r" values="3;6;3" dur="1.2s" repeatCount="indefinite" />
                                    </circle>

                                    <circle cx="50" cy="35" r="10" stroke-opacity="0.5">
                                        <animate attributeName="r" values="10;30" dur="1.5s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0.6;0" dur="1.5s" repeatCount="indefinite" />
                                    </circle>

                                </g>
                            </svg>}
                            {error && <span className='text-xs text-red-400'>{error}</span>}
                            <span>{location && location}</span>
                            <FaChevronDown size={10} className='text-gray-500' />
                        </div>
                    </div>
                    {/* <div className='flex justify-between items-center gap-4'>
                    <FaUserCircle size={24} className='text-gray-400'/> Hi, Guest
                </div> */}
                    <button className='bg-red-400 text-white text-xs px-3 lg:px-4 py-1 lg:py-2 rounded-md'>Sign In</button>
                    <FaBars size={20} className='text-gray-600' />
                </div>
            </div>
            <div className='bg-gray-200 px-4 md:px-8 py-2 flex justify-between items-center text-xs'>
                <div className='flex justify-between items-center gap-4'>
                    <span className='cursor-pointer hover:font-semibold'>Movie</span>
                    <span className='cursor-pointer hover:font-semibold'>Stream</span>
                    <span className='cursor-pointer hover:font-semibold'>Events</span>
                    <span className='cursor-pointer hover:font-semibold'>Plays</span>
                    <span className='cursor-pointer hover:font-semibold'>Sports</span>
                    <span className='cursor-pointer hover:font-semibold'>Activities</span>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <span className='cursor-pointer hover:font-semibold'>ListYourShow</span>
                    <span className='cursor-pointer hover:font-semibold'>Corporates</span>
                    <span className='cursor-pointer hover:font-semibold'>Offers</span>
                    <span className='cursor-pointer hover:font-semibold'>Gift Cards</span>
                </div>
            </div>
        </div>
    )
}

export default Header
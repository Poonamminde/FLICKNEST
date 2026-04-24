import LOGO from '../../../assets/logo.png';
import { FaInstagram, FaFacebook, FaPinterest, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='bg-gray-800 text-gray-400 py-8'>
        <div className='flex flex-col justify-between items-center gap-4'>
          <div className='flex items-center gap-2 mb-4 md:mb-0 w-full'>
            <div className="flex-1 h-[1px] bg-gray-500"></div>
            <img src={LOGO} alt="Logo" className='h-12' />
            <div className="flex-1 h-[1px] bg-gray-500"></div>
          </div>
          <div className='flex space-x-4'>
            <FaInstagram size={24} />
            <FaFacebook size={24} />
            <FaPinterest size={24} />
            <FaTwitter size={24} />
            <FaYoutube size={24} />
            <FaLinkedin size={24} />
          </div>
          <div className='text-center text-xs mt-4 px-4'>
            <p>Copyright 2026 ©Bigtree Entertainment Pvt. Ltd.All Rights Reserved.</p>
            <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
          </div>
        </div>
    </div>
  )
}

export default Footer
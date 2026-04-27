import { IoMdAdd, IoIosLogOut } from 'react-icons/io';
import { FiEdit } from "react-icons/fi";

const UserProfile = () => {
  return (
    <>
                <div className="bg-gradient-to-r from-gray-800 to-[#f74565] rounded-t-md ps-6 py-6 flex items-center gap-6 text-white">
                    <div className="relative w-20 h-20 border-4 border-white rounded-full flex items-center justify-center bg-white text-gray-600">
                       <IoMdAdd size={24} />
                    </div>
                    <div className='mt-2'>
                        <h2 className="text-2xl font-bold">Hi, Poonam Minde</h2>
                        <small className="underline cursor-pointer">
                            <IoIosLogOut size={20} className="inline" />  Logout
                        </small>
                    </div>
                </div>
                <div className='bg-white px-6 py-6 rounded-b-md'>
                    <h3 className='text-lg font-semibold mb-4'>Account Details</h3>
                    <div className="mb-3 flex items-center justify-between">
                        <p className='text-sm font-normal'>Email Address</p>
                        <div className="flex items-center gap-2">
                            <span>testemail@gmail.com</span>
                            <span className="text-green-600 text-xs bg-green-100 rounded">Verified</span>
                        </div>
                        <FiEdit className="text-pink-500 cursor-pointer" />
                    </div>
                    <div className="mb-3 flex items-center justify-between">
                        <p className='text-sm font-normal'>Mobile Number</p>
                        <div className="flex items-center gap-2">
                            <span>924448909</span>
                            <span className="text-green-600 text-xs bg-green-100 rounded">Verified</span>
                        </div>
                        <FiEdit className="text-pink-500 cursor-pointer" />
                    </div>
                </div>
                <div className='bg-white p-6 mt-4 rounded-md'>
                    <h3 className='text-lg font-semibold'>Personal Details</h3>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label className="text-sm font-normal">Name</label>
                            <input type="text" name="Poonam Minde" readOnly className='w-full mt-1 border border-gray-200' />
                        </div>
                        <div>
                            <label className="text-sm font-normal">Birthday (Optional)</label>
                            <input type="text" name="27-12-1999" id="" className='w-full mt-1 border border-gray-200' />
                        </div>
                        <div>
                            <label className="text-sm font-normal">Identity (Optional)</label>
                            <div className="flex gap-2 mt-1">
                                <button className={'px-4 py-1 bodrder border-gray-200 rounded-lg bg-white'}>
                                    Woman
                                </button>
                                <button className={'px-4 py-1 bodrder border-gray-200 rounded-lg bg-white'}>
                                    Man
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-normal">Married? (Optional)</label>
                            <div className="flex gap-2 mt-1">
                                <button className={'px-4 py-1 bodrder border-gray-200 rounded-lg bg-white'}>
                                    Yes
                                </button>
                                <button className={'px-4 py-1 bodrder border-gray-200 rounded-lg bg-white'}>
                                    No
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                </>
  )
}

export default UserProfile
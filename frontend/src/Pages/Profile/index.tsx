import React from 'react';
import { tabs } from "../../constants";
import UserProfile from './UserProfile';
import BookingHistory from "./BookingHistory"

const index = () => {
    const [activeTab, setActiveTab] = React.useState(tabs[0]);
  return (
    <div>
        <div className='bg-[#f6f6f6]'>
            <div className='px-4 md:px-8 flex flex-wrap gap-6 py-6 text-sm font-medium'>
                {
                    tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`pb-1 cursor-pointer ${activeTab === tab ? 'text-[#f74565]' : 'text-gray-600 hover:text-black'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))
                }
            </div>
        </div>
        <div className='px-4 md:px-8 pb-4 bg-gray-100'>
            { activeTab === "Profile" && <UserProfile /> }
            { activeTab === "Your Orders" && <BookingHistory/>}
        </div>

    </div>
  )
}

export default index
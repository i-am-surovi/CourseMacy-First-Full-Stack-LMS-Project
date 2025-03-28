import React from 'react'
import Userlogo from "../assets/user.jpg"

const Profile = () => {
  return (
    <div className=' bg-gray-100 py-12 px-4 lg:px-0'>
      <div className="max-w-6xl mx-auto p-8 bg-gradient-to-r bg-white shadow-xl rounded-2xl mt-14">
        <div className='flex flex-col items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-12'>
            {/* profile picture */}
            <div className='w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg'>
                <img src={Userlogo} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
      </div>
    </div>


    
  )
}

export default Profile
import React from 'react'
import { background, person1, person2, person3, person4 } from '../../assets/Images'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGooglePlus
} from 'react-icons/fa'
import { teamData } from '../../data'

const Team = () => {
  return (
    <div className='  bg-cover -z-10 space-y-4 bg-center bg-no-repeat' >
      <div className='flex flex-col justify-center items-center py-9 '>
        <p className='text-xl font-bold text-stone-300 '>We are experience farmers</p>
        <h1 className='text-5xl my-7 font-semibold text-stone-300'>
          Our Team
        </h1>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-9 lg:gap-0  w-[90%] '>
          {
            teamData.map((team, index) => {
              return (
                <div className='card w-[90%] mx-auto  bg-base-50 shadow-xl' key={index}>
                  <figure className=' '>
                    <img
                      src={team.image}
                      alt='Shoes'
                      className='rounded-t-lg h-[40vh] object-cover w-[100%]'
                    />
                  </figure>
                  <div class=" inset-0 -z-10 h-[40%] rounded-b-lg shadow-md w-full items-center px-5 py-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                    
                    <h2 className='card-title pb-4 text-stone-300 font-medium'>
                      {team.Name}
                    </h2>
                    <p className='text-stone-400 py-2' >
                      {team.Role}
                    </p>
                    <div className='card-actions py-4 gap-[40px] text-gray-50'>
                      <FaFacebook className='hover:text-green-500 cursor-pointer duration-300' />
                      <FaInstagram className='hover:text-green-500 cursor-pointer duration-300' />
                      <FaTwitter className='hover:text-green-500 cursor-pointer duration-300' />
                      <FaGooglePlus className='hover:text-green-500 cursor-pointer duration-300' />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Team

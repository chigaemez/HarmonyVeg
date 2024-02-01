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
    <div className='bg-white  bg-cover -z-10 space-y-4 bg-center bg-no-repeat' style={{ backgroundImage: `url(${background})` }}>
      <div className='flex flex-col justify-center items-center py-9 '>
        <p className='text-xl font-bold text-green-600 '>What we offer</p>
        <h1 className='text-5xl my-7 font-semibold text-gray-700'>
          Our Products
        </h1>

        <div className='grid grid-cols-4  w-[80%] '>
         {
            teamData.map((team, index) => {
                return(
                    <div className='card w-[90%] mx-auto  bg-base-50 shadow-xl'>
                    <figure className=' '>
                      <img
                        src={team.image}
                        alt='Shoes'
                        className='rounded-xl h-[40vh] object-cover w-[100%]'
                      />
                    </figure>
                    <div className='card-body  items-center text-center'>
                      <h2 className='card-title text-gray-600 font-medium'>
                        {team.Name}
                      </h2>
                      <p className='text-gray-500'>
                       {team.Role}
                      </p>
                      <div className='card-actions gap-[40px] text-gray-700'>
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

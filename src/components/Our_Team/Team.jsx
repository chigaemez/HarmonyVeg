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

        <div className='flex flex-wrap lg:flex-row  w-[80%] '>
          {
            teamData.map((team, index) => {
              return (
                <div className='card  mx-auto p-1 bg-base-50 shadow-xl' key={index}>
                  <figure className=' '>
                    <img
                      src={team.image}
                      alt='Shoes'
                      className='rounded-t-lg h-[300px] object-cover w-[300px]'
                    />
                  </figure>
                  <div className=" w-[300px] bg-gradient-to-r from-stone-700 to-stone-400 rounded-b-lg p-4">
                    
                    <h2 className='card-title pb-1 text-stone-300 font-medium'>
                      {team.Name}
                    </h2>
                    <p className='text-stone-400 py-1' >
                      {team.Role}
                    </p>
                    <div className='card-actions items-center justify-center py-4 gap-[40px] text-gray-50'>
                      <FaFacebook className='hover:text-green-500 text-2xl cursor-pointer duration-300' />
                      <FaInstagram className='hover:text-green-500 text-2xl cursor-pointer duration-300' />
                      <FaTwitter className='hover:text-green-500 text-2xl cursor-pointer duration-300' />
                      <FaGooglePlus className='hover:text-green-500 text-2xl cursor-pointer duration-300' />
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

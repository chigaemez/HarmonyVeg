import React from 'react'
import { IoLocation } from 'react-icons/io5'
import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGooglePlus
} from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

const Footer = () => {
  return (
    <>
      <div className=' from-[#171e44] to-[#4e4674] bg-gradient-to-br flex flex-col lg:flex-row py-9  justify-center items-center'>
        <div className='flex flex-col lg:w-[30%] w-[80%] '>
          <h1 className='text-lg text-white font-medium my-[30px]'>
            QUICK LINKS
          </h1>
          <div className='flex flex-col w-[90%] gap-4  justify-start items-start'>
            <h1 className='group text-white font-medium flex flex-row justify-center hover:text-green-600 duration-300 items-center gap-3 cursor-pointer '>
              <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-gray-500 h-[2px] border-none' />{' '}
              Our Team
            </h1>
            <h1 className='group text-white font-medium flex flex-row justify-center hover:text-green-600 duration-300 items-center gap-3 cursor-pointer '>
              <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-gray-500 h-[2px] border-none' />{' '}
              New Products
            </h1>
            <h1 className='group text-white font-medium flex flex-row justify-center hover:text-green-600 duration-300 items-center gap-3 cursor-pointer '>
              <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-gray-500 h-[2px] border-none' />{' '}
              About Us
            </h1>
            <h1 className='group text-white font-medium flex flex-row justify-center hover:text-green-600 duration-300 items-center gap-3 cursor-pointer '>
              <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-gray-500 h-[2px] border-none' />{' '}
              FAQ
            </h1>
            <h1 className='group text-white font-medium flex flex-row justify-center hover:text-green-600 duration-300 items-center gap-3 cursor-pointer '>
              <hr className='w-[20px] group-hover:w-[40px] duration-300 bg-gray-500 h-[2px] border-none' />{' '}
              Contact Us
            </h1>
          </div>
        </div>
        <div className='flex flex-col lg:w-[20%] w-[80%] '>
          <h1 className='text-lg text-white font-medium my-[30px]'>
            GET IN TOUCH
          </h1>
          <div className='flex flex-col gap-7 '>
            <h1 className='flex text-gray-400 gap-8 lg:justify-center lg:items-center hover:text-green-500 duration-500 '>
              <span>
                <IoLocation className='text-green-600 text-lg' />
              </span>{' '}
              24 jamui Adeyinka ST 2, Obafemi Awolowo Ikd 94041 Lagos NG
            </h1>

            <a
              href='+234 8024151426'
              className='flex text-gray-400 gap-8  hover:text-green-500 duration-500 '
            >
              <span>
                <FaPhone className='text-green-600 text-lg' />
              </span>{' '}
              +234 8024151426
            </a>
            <a
              href='#'
              className='flex text-gray-400 gap-8  hover:text-green-500 duration-500 '
            >
              <span>
                <MdMail className='text-green-600 text-lg' />
              </span>{' '}
              info@demolink.org
            </a>

            <div className='flex gap-8'>
              <FaFacebook className='text-2xl hover:text-green-500 cursor-pointer duration-200 ease-in' />{' '}
              <FaTwitter className='text-2xl hover:text-green-500 cursor-pointer duration-200 ease-in' />{' '}
              <FaInstagram className='text-2xl hover:text-green-500 cursor-pointer duration-200 ease-in' />{' '}
              <FaGooglePlus className='text-2xl hover:text-green-500 cursor-pointer duration-200 ease-in' />
            </div>
          </div>
        </div>
      </div>
      <footer className='border-t-2 w-full h-[10vh] from-[#171e44] to-[#4e4674] bg-gradient-to-br flex lg:flex-row flex-col md:flex-row  justify-center items-center'>
        <h1 className='text-slate-200 '>
          <span className='text-sm'>&copy; 2024 | Harmony Veg Home reserved. </span>
        </h1>
        <a href='https://orji-christopher.onrender.com' target="_blank" className='mx-2 text-sm'>
          Designed by <span className='text-orange-500'>Orji Christopher</span>
        </a>

      </footer>
    </>
  )
}

export default Footer

import React, { useContext, useState, useEffect } from 'react'
import { BsCart4 } from 'react-icons/bs'
import CartContext from '../Context/CartContext'
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import { RiMenu2Line } from 'react-icons/ri'

const Header = ({ isOpen }) => {
  const GlobalState = useContext(CartContext)
  const [showMenu, SetShowMenu] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const handleToggleMenu = () => {
    SetShowMenu(!showMenu)
  }

  const HandleBgChange = () => {
    if (window.scrollY >= 90) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', HandleBgChange)

  const state = GlobalState.state
  return (
    <div
      className={
        navbar
          ? 'flex items-center lg:px-24 px-4 justify-between fixed top-0 duration-300 ease-in left-0 z-40 w-full bg-stone-300 shadow-xl  h-[90px] py-5 '
          : 'flex items-center lg:px-24 px-4 justify-between fixed top-0 duration-300 ease-in left-0 z-40 w-full h-[90px] py-5 '
      }
    >
      {showMenu && (
        <div className='absolute z-[999] inset-0 flex lg:hidden h-screen bg-black opacity-70 duration-700 ease-in'></div>
      )}
      <div className='flex items-center justify-center'>
        <h1
          className={
            navbar
              ? 'text-3xl flex font-bold text-stone-800 relative  z-50 cursor-pointer duration-300 ease-in '
              : 'text-3xl flex font-bold text-white relative z-50 cursor-pointer duration-300 ease-in '
          }
        >
          HVH{' '}
          <hr
            className={
              navbar
                ? 'w-[40px] h-1 bg-stone-800 border-none absolute top-4 right-3 duration-300 ease-in'
                : 'w-[40px] h-1 bg-white border-none absolute top-4 right-3 duration-300 ease-in'
            }
          />{' '}
          <span>.</span>
        </h1>
      </div>

      {/* DESKTOP VIEW */}

      <div className='hidden md:hidden lg:flex'>
        <div>
          <ul className='flex items-center gap-9'>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              <Link to='/'>Home</Link>
            </li>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              About
            </li>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              Services
            </li>

            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              Pricing
            </li>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              Team
            </li>

            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              Contact
            </li>
            <Link
              to='/cart'
              className={
                navbar
                  ? 'relative bg-stone-700 py-2 px-7  rounded duration-300 ease-in'
                  : 'relative bg-stone-300 py-2 px-7  rounded duration-300 ease-in'
              }
            >
              <BsCart4
                className={
                  navbar
                    ? 'text-stone-300 text-2xl duration-300 ease-in'
                    : 'text-stone-800 text-2xl duration-300 ease-in'
                }
              />

              <p className='text-lg text-red-600 absolute top-[-4px] right-9 font-extrabold'>
               {state.length}
              </p>
            </Link>
          </ul>
        </div>
      </div>
      <div className='flex lg:hidden items-center justify-between gap-4'>
        <div
          className={
            navbar
              ? 'flex text-black gap-6 lg:hidden text-2xl z-50 duration-300 ease-in '
              : 'flex text-white gap-6 lg:hidden text-2xl z-50 duration-300 ease-in'
          }
          onClick={handleToggleMenu}
        >
          <RiMenu2Line />
        </div>
        <Link to='/cart' className='relative z-40'>
          <BsCart4
            className={
              navbar
                ? 'text-stone-800 text-2xl duration-300 ease-in'
                : 'text-stone-300 text-2xl duration-300 ease-in'
            }
          />
          <p className='text-lg text-red-400 absolute top-[-16px] right-1 font-bold'>
            0
          </p>
        </Link>
      </div>

      {/* MOBILE VIEW  */}

      {showMenu && (
        <div className='flex lg:hidden  justify-between duration-500 h-[90vh] ease-out z-[999] rounded-lg px-4  bg-white w-[95%] absolute top-[50px] py-4 bg-transparent  text-white'>
          <IoClose
            className=' z-[999] absolute  text-white top-[-40px] right-0 text-3xl '
            onClick={handleToggleMenu}
          />
          <div>
            <ul className='flex flex-col  items-start gap-9 '>
              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                Home
              </li>
              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                About
              </li>
              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                Services
              </li>

              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                Pricing
              </li>
              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                Team
              </li>

              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header

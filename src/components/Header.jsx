import React, { useContext, useState, useEffect } from 'react'
import { BsCart4 } from 'react-icons/bs'
import CartContext from '../Context/CartContext'
import { Link } from 'react-router-dom'

const Header = ({ isOpen }) => {



    const GlobalState = useContext(CartContext)

    const state = GlobalState.state
    return (
        <div className="navbar from-[#171e44] to-[#4e4674] bg-gradient-to-br fixed z-[999]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><a>Home</a></li>
                        <li>
                            <a>Parent</a>

                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='text-white text-base'>Home</a></li>
                    <li>
                        <a className='text-white text-base'>About</a>
                    </li>
                    <li><a className='text-white text-base'>Our Product</a></li>
                    <li><a className='text-white text-base'>Our Team</a></li>
                </ul>
            </div>
            <div className="navbar-end relative ">
                <Link to="/cart" onClick={() => isOpen(true)} className="btn text-xl"><BsCart4 /></Link>
                <div className='text-gray-200 absolute top-0 right-[2%] text-base'><span>{state.length}</span></div>
            </div>
        </div>
    )
}

export default Header

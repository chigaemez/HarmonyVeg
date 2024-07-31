import React, { useContext, useState } from 'react'
import CartContext from '../Context/CartContext';
import { images } from '../assets/Images';
import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = ({ isOpen, onClose }) => {
  const { ShowHiddenCart } = useContext(CartContext)



  const GlobalState = useContext(CartContext)
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch

  console.log(state)

  let vat = 50;
  let shipping = 200;

  if (!isOpen) return null


  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
  };

  const total = state.reduce((total, item) => {
    return total + item.price
  }, 0)

  const orderTotal = total + vat + shipping





  return (
    <div onClick={onClose} className='flex items-center justify-end  w-[100%] '>

      <div className="flex items-center justify-end   flex-col w-[100%] bg-white  " onClick={(e) => {
        e.stopPropagation()
      }}>
        <div className="hero h-[70vh] bg-base-200 object-fill " style={{ backgroundImage: `url(${images})` }}>
          <div className='h-[70vh] w-full bg-gradient-to-r from-black' />
          <div className="flex items-center  mt-[-20rem] h-[20%]  justify-between w-[80%]">
            <div className="flex items-center justify-center flex-col">
              <h1 className='text-xl font-medium text-orange-500 '>// WELCOME TO OUR COMPANY</h1>
              <h1 className='text-8xl font-medium '>Cart</h1>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Link to='/' className='text-lg font-medium hover:text-orange-600'>
                Home
              </Link>
              |
              <p className='text-lg font-medium text-orange-600'> Cart</p>
            </div>
          </div>
        </div>



        <div className=' md:w-[60%]  w-[60%] rounded shadow-lg   '>
          <table className='border-collapse border w-full bg-transparent text-green-600'>
            <thead className='bg-transparent border-b-1 border-gray-200'>
              <tr>
                <th className='border-[1px] bg-transparent p-2 text-center tracking-wide'>
                  Product
                </th>
                <th className='border-[1px] bg-transparent p-2 text-center tracking-wide'>Price</th>
                <th className='border-[1px] bg-transparent p-2 text-center tracking-wide'>
                  Quantity
                </th>
                <th className='border-[1px] p-2 text-center tracking-wide '>
                  Total
                </th>
              </tr>
            </thead>
            <tbody className=''>
              {state.map((item, index) => {
                return (
                  <>
                    <tr className='border-b-[1px]  ' key={index}>
                      <td className=' border-r-[1px]  border-l-[1px] flex items-center justify-between px-5  gap-2'> <img src={item.image} className='w-[90px] h-[70px] rounded-md' alt="" />{item.name}</td>
                      <td className=' border-[1px]  '><p className='text-center'><span>&#x20A6;</span>{item.price} Per KG</p></td>
                      <td className=' border-[1px]  '>
                        <input
                          type="number"
                          placeholder="Amount in kg"
                          className="input input-bordered input-success bg-transparent w-full max-w-xs outline-none" />
                      </td>
                      <td className=' border-[1px] w-[20%] '><p className='text-center'> ${item.price}</p></td>
                    </tr>

                  </>
                )
              })}
            </tbody>
          </table>

        </div>


        <div className="flex w-[60%] my-7  items-center justify-end">
          <div className="flex flex-col w-[46%] ">
            <h1 className='text-2xl text-slate-600 font-semibold my-5'>Cart Totals</h1>

            <div className="flex flex-col gap-4">
              <div className="flex w-full items-center h-[6vh] px-4 justify-between bg-slate-100">
                <p className='text-lg text-slate-600'>Cart Subtotal</p>
                <p className='text-lg text-slate-600 mr-[2rem]'> ${total}</p>
              </div>
              <div className="flex w-full items-center h-[6vh] px-4 justify-between bg-slate-50">
                <p className='text-lg text-slate-600'>Shipping and Handing</p>
                <p className='text-lg text-slate-600 mr-[2rem]'> $200</p>
              </div>
              <div className="flex w-full items-center h-[6vh] px-4 justify-between bg-slate-100">
                <p className='text-lg text-slate-600'>Vat</p>
                <p className='text-lg text-slate-600 mr-[2rem]'> $20</p>
              </div>
              <div className="flex w-full items-center h-[6vh] px-4 justify-between bg-slate-100">
                <p className='text-lg text-slate-600'>Oder Total</p>
                <p className='text-lg text-slate-600 mr-[2rem]'> ${orderTotal}</p>
              </div>
              <Link to="/checkout">
                <button className='btn mt-[1rem] '> Proceed to checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart

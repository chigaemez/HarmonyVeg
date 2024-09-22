import React, { useContext } from 'react'
import { background } from '../../assets/Images'
import CartContext from '../../Context/CartContext'
import { shoppingData } from '../../data'

const Product = () => {
  const Globalstate = useContext(CartContext)
  const dispatch = Globalstate.dispatch

  return (
    <div
      className='lg:h-screen   lg:py-0  bg-cover space-y-4 bg-center   bg-no-repeat  justify-center'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='flex flex-col justify-center items-center py-9 '>
        <p className='lg:text-xl font-bold text-green-600 '>What we offer</p>
        <h1 className='lg:text-5xl text-2xl my-4 font-semibold text-gray-700'>
          Our Products
        </h1>

        <div className='flex flex-wrap items-center justify-center   lg:flex-row w-full '>
          {shoppingData.map((item, index) => (
            <div className='flex mb-4 p-4 w-[400px] h-[400px] ' key={index}>
              <div className='card  mx-auto   text-white bg-gradient-to-r  from-stone-400 to-stone-600 '>
                <div className='card-body'>
                  <h2 className='card-title'>{item.name}</h2>
                  <p>{item.dec}</p>
                  <div className='card-actions justify-end'>
                    <button
                      className='btn my-9 w-[40%] bg-green-500 border-none text-white'
                      onClick={() => dispatch({ type: 'ADD', payload: item })}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product

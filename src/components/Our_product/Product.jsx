import React from 'react'
import { background } from '../../assets/Images'

const Product = () => {
  return (
    <div className='lg:h-screen  py-[4rem] lg:py-0  bg-cover -z-10 space-y-4 bg-center   bg-no-repeat  flex flex-col justify-center'
    style={{ backgroundImage: `url(${background})` }}>
      <div className='flex flex-col justify-center items-center py-9 '>
        <p className='lg:text-xl font-bold text-green-600 '>What we offer</p>
        <h1 className='lg:text-5xl text-2xl my-4 font-semibold text-gray-700'>
          Our Products
        </h1>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1 w-[80%] '>
          <div className='card w-[90%] mx-auto h-[40vh]  text-white bg-gradient-to-r  from-stone-400 to-stone-600 '>
            <div className='card-body'>
              <h2 className='card-title'>Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='card-actions justify-end'>
                <button className='btn my-9 w-[40%] bg-green-500 border-none text-white'>Buy Now</button>
              </div>
            </div>
          </div>
          <div className='card w-[90%] mx-auto h-[40vh]  text-white bg-gradient-to-r  from-stone-400 to-stone-600 '>
            <div className='card-body'>
              <h2 className='card-title'>Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='card-actions justify-end'>
                <button className='btn my-9 w-[40%] bg-green-500 border-none text-white'>Buy Now</button>
              </div>
            </div>
          </div>
          <div className='card w-[90%] mx-auto h-[40vh]  text-white bg-gradient-to-r  from-stone-400 to-stone-600 '>
            <div className='card-body'>
              <h2 className='card-title'>Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='card-actions justify-end'>
                <button className='btn my-9 w-[40%] bg-green-500 border-none text-white'>Buy Now</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Product

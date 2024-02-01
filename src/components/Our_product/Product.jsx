import React from 'react'
import { background } from '../../assets/Images'

const Product = () => {
  return (
    <div className='h-screen  bg-cover -z-10 space-y-4 bg-center bg-white  bg-no-repeat  flex flex-col justify-center'
    style={{ backgroundImage: `url(${background})` }}>
      <div className='flex flex-col justify-center items-center py-9 '>
        <p className='text-xl font-bold text-green-600 '>What we offer</p>
        <h1 className='text-5xl my-7 font-semibold text-gray-700'>
          Our Products
        </h1>

        <div className='grid grid-cols-4 w-[80%] '>
          <div className='card w-[90%] mx-auto h-[40vh] bg-gray-100 text-primary-content'>
            <div className='card-body'>
              <h2 className='card-title'>Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='card-actions justify-end'>
                <button className='btn'>Buy Now</button>
              </div>
            </div>
          </div>
          <div className='card w-[90%] mx-auto h-[40vh] bg-gray-100 text-primary-content'>
            <div className='card-body'>
              <h2 className='card-title'>Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='card-actions justify-end'>
                <button className='btn'>Buy Now</button>
              </div>
            </div>
          </div>
          <div className='card w-[90%] mx-auto h-[40vh] bg-gray-100 text-primary-content'>
            <div className='card-body'>
              <h2 className='card-title'>Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='card-actions justify-end'>
                <button className='btn'>Buy Now</button>
              </div>
            </div>
          </div>
          <div className='card w-[90%] mx-auto h-[40vh] bg-gray-100 text-primary-content'>
            <div className='card-body'>
              <h2 className='card-title'>Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className='card-actions justify-end'>
                <button className='btn'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

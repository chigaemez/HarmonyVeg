import React from 'react'


const Blog = () => {
  return (
    <div className='bg-gray-100 h-[90vh]'>
      <div className='flex flex-col justify-center items-center py-9 '>
        <p className='text-xl font-bold text-green-600 '>Latest News</p>
        <h1 className='text-5xl my-7 font-semibold text-gray-700'>Our Blog</h1>

        <div className='grid grid-cols-3 w-[80%] '>
          <div className='card card-compact mx-auto  w-[80%] bg-base-100 shadow-xl'>
            <figure>
              <img
                src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                alt='Shoes'
              />
            </figure>
            <div className='card-body bg-white'>
              <h2 className='text-slate-500 text-base'>September 19, 2021</h2>
              <p className='text-slate-800 text-lg'>
                If a dog chews shoes whose shoes does he choose?
              </p>
              <p className='text-slate-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                voluptates error nemo, debitis a commodi exercitationem fugiat
                inventore, tenetur aut pariatur harum perferendis sit
                consequuntur tempora earum excepturi optio? Earum!
              </p>
            </div>
          </div>
          <div className='card card-compact mx-auto w-[80%] bg-base-100 shadow-xl'>
            <figure>
              <img
                src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                alt='Shoes'
              />
            </figure>
            <div className='card-body bg-white'>
              <h2 className='text-slate-500 text-base'>September 19, 2021</h2>
              <p className='text-slate-800 text-lg'>
                If a dog chews shoes whose shoes does he choose?
              </p>
              <p className='text-slate-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                voluptates error nemo, debitis a commodi exercitationem fugiat
                inventore, tenetur aut pariatur harum perferendis sit
                consequuntur tempora earum excepturi optio? Earum!
              </p>
            </div>
          </div>
          <div className='card card-compact mx-auto w-[80%] bg-base-100 shadow-xl'>
            <figure>
              <img
                src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                alt='Shoes'
              />
            </figure>
            <div className='card-body bg-white'>
              <h2 className='text-slate-500 text-base'>September 19, 2021</h2>
              <p className='text-slate-800 text-lg'>
                If a dog chews shoes whose shoes does he choose?
              </p>
              <p className='text-slate-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                voluptates error nemo, debitis a commodi exercitationem fugiat
                inventore, tenetur aut pariatur harum perferendis sit
                consequuntur tempora earum excepturi optio? Earum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

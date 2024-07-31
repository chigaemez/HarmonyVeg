import React from 'react'


const Blog = () => {
  return (
    <div className='lg:h-[100vh] bg-slate-100  py-[4rem] lg:py-0'>
      <div className='flex flex-col justify-center items-center py-9 '>
        <p className='lg:text-xl font-bold text-green-600 '>Latest News</p>
        <h1 className='lg:text-5xl text-3xl my-4 font-semibold text-gray-700'>Our Blog</h1>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1 w-[80%] '>
          <div className='card card-compact mx-auto  w-[90%] bg-base-100 shadow-xl'>
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
          <div className='card card-compact mx-auto w-[90%] bg-base-100 shadow-xl'>
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
          <div className='card card-compact mx-auto w-[90%] bg-base-100 shadow-xl'>
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

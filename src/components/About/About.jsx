import React, { useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { image } from '../../data'
import { background, Bg } from '../../assets/Images'

const About = () => {
  const [selectedImage, setSelectedImages] = useState(image[0])


  


  return (
    <div className=' lg:px-[4rem] lg:h-[100vh] md:px-[10rem] lg:py-[10rem] flex w-full px-[10px]  bg-cover -z-10 space-y-4 bg-center bg-no-repeat' style={{ backgroundImage: `url(${background})` }}>
      <div className='lg:flex flex flex-col-reverse item-center justify-center  lg:flex-row w-[100%]  '>
        <div className='lg:w-[70%] w-full pl-6  flex-col flex '>
          <div className='w-[100%]'>
            <img
              src={selectedImage}
              alt='image'
              className='h-[50vh] w-[98%] object-cover'
            />
          </div>
          <div className=' flex w-[23%]  my-[25px] lg:gap-3 gap-2 h-[90px] '>
            {
              image.map((img, index) => {
                return (
                  <img
                  src={img}
                  key={index}
                  alt=''
                  onClick={() => setSelectedImages(img)}
                  className='object-cover'
                />
                )
              })
            }
          </div>
        </div>

        <div className='lg:w-[80%] lg:mt-7 my-[40px] pl-6 flex-col flex '>
          <h1 className='text-green-600 lg:text-xl text-lg font-medium'>
            founded in 2018
          </h1>
          <h1 className='lg:text-6xl text-2xl  text-stone-300 tracking-tighter'>Our farm</h1>
          <h1 className='text-4xl font-medium text-stone-300 my-2'>
            Who we are
          </h1>
          <div className='my-10 lg:w-[80%] w-[100%] '>
            <div className='flex justify-around lg:justify-between items-center flex-wrap gap-[10px]  '>
              <button className='text-green-500 font-medium border-b-[3px] border-b-slate-300 hover:border-b-[3px] hover:border-b-green-600 '>
                About
              </button>
              <button className='text-green-500 font-medium border-b-[3px] border-b-slate-300 hover:border-b-[3px] hover:border-b-green-600 '>
                Our vision
              </button>
              <button className='text-green-500 font-medium border-b-[3px] border-b-slate-300 hover:border-b-[3px] hover:border-b-green-600 '>
                Our mission
              </button>
            </div>
            <hr className=' bg-slate-300 h-[03px] mt-[-3px] ' />
          </div>
          <p className='lg:w-[87%] text-stone-300 font-medium'>
            Our mission is to provide our community and neighbors with proven
            poultry and the patterns essential to developing sustainable poultry
            flocks.
          </p>

          <button className='btn my-9 w-[40%] bg-green-500 border-none  text-white'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default About

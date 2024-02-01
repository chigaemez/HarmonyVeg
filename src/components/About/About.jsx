import React, { useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { image } from '../../data'
import { background } from '../../assets/Images'

const About = () => {
  const [selectedImage, setSelectedImages] = useState(image[2])


  return (
    <div className=' px-[14rem] py-[10rem] flex w-full h-[100vh] bg-white bg-cover -z-10 space-y-4 bg-center bg-no-repeat' style={{ backgroundImage: `url(${background})` }}>
      <div className='flex w-[100%] gap-[40px] '>
        <div className='w-[80%] h-[20vh] bg-black flex-col flex '>
          <div className='w-[100%]'>
            <img
              src={selectedImage}
              alt=''
              className='h-[50vh] w-[100%] object-cover'
            />
          </div>
          <div className=' flex w-[23%]  my-[25px] gap-3 h-[90px] '>
            {image.map((img, index) => (
              <img
                src={img.image}
                alt=''
                onClick={() => setSelectedImages(img.image)}
                className='object-cover'
              />
            ))}
          </div>
        </div>

        <div className='w-[80%] mt-7 h-[19vh] flex-col flex '>
          <h1 className='text-green-600 text-xl font-medium'>
            founded in 2018
          </h1>
          <h1 className='text-6xl font-medium text-gray-800'>Our farm</h1>
          <h1 className='text-4xl font-medium text-gray-800 my-2'>
            Who we are
          </h1>
          <div className='my-10 '>
            <div className='flex gap-[90px]  '>
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
            <hr className='w-[70%] bg-slate-300 h-[03px] mt-[-3px] ' />
          </div>
          <p className='w-[87%] text-slate-700 font-medium'>
            Our mission is to provide our community and neighbors with proven
            poultry and the patterns essential to developing sustainable poultry
            flocks.
          </p>

          <button className='btn my-9 w-[40%] bg-green-500 border-none text-white'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default About

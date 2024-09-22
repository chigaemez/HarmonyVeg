import React, { useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { image } from '../../data'
import { background, Bg } from '../../assets/Images'

const About = () => {
  const [selectedImage, setSelectedImages] = useState(image[0])

  return (
    <div
      className=' lg:px-[4rem] lg:h-[100vh] md:px-[10rem] lg:py-[10rem] flex items-center justify-center w-full px-[10px]  bg-cover -z-10 space-y-4 bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='lg:flex flex b flex-col-reverse item-center justify-center  lg:flex-row w-[80%]  '>
        <div className='lg:w-[60%] w-full pl-6  flex-col flex '>
          <div className='w-[100%]'>
            <img
              src={selectedImage}
              alt='image'
              className='h-[50vh] w-[600px]  object-cover'
            />
          </div>
          <div className=' flex w-[23%]  my-[25px] lg:gap-3 gap-2 h-[90px] '>
            {image.map((img, index) => {
              return (
                <img
                  src={img}
                  key={index}
                  alt=''
                  onClick={() => setSelectedImages(img)}
                  className='object-cover'
                />
              )
            })}
          </div>
        </div>

        <div className='lg:w-[80%] lg:mt-7 my-[40px] pl-6 flex-col flex '>
          <h1 className='text-green-600 lg:text-xl text-lg font-medium'>
            founded in 2018
          </h1>
          <h1 className='text-4xl font-medium text-stone-300 my-2'>
            Why Choose Us?
          </h1>

          <div className='pb4'>
            <li>
              {' '}
              <span className='font-bold text-xl'>Farm Fresh:</span> Sourced
              directly from trusted local farmers, guaranteeing freshness and
              quality.
            </li>
            <li>
              <span className='font-bold text-xl'>
                Organic & Chemical-Free:
              </span>{' '}
              Our vegetables are 100% organic, free from harmful chemicals and
              pesticides.
            </li>
            <li>
              <span className='font-bold text-xl'>Convenient Delivery:</span>{' '}
              Enjoy the convenience of farm-to-table deliveries with just a few
              clicks.
            </li>
            <li>
              <span className='font-bold text-xl'>Wide Selection: </span> From
              leafy greens to root vegetables, find all your favorites in one
              place.
            </li>
            <li>
              <span className='font-bold text-xl'>
                Eco-Friendly Practices:{' '}
              </span>{' '}
              We believe in sustainable farming and eco-friendly packaging for a
              greener planet.
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

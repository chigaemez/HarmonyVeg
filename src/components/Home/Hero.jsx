import { useState, useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { sliderData } from '../../data'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderLength = sliderData.length
  const autoScroll = true
  let slideInterval
  let intervalTime = 5000

  const nextSLide = () => {
    setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSLide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1)
  }

  function auto () {
    slideInterval = setInterval(nextSLide, intervalTime)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      auto()
    }

    return () => clearInterval(slideInterval)
  }, [currentSlide])

  return (
    <div className='w-[100%] h-[100vh] relative overflow-hidden'>
      <AiOutlineArrowLeft className='border rounded-full bg-transparent text-white w-[2rem] h-[2rem] cursor-pointer absolute z-[999] hover:bg-white hover:text-gray-400 top-[45%] left-[1.5rem]' onClick={prevSLide}/>
      <AiOutlineArrowRight className='border rounded-full bg-transparent text-white w-[2rem] h-[2rem] cursor-pointer absolute z-[999] hover:bg-white hover:text-gray-400 top-[45%] right-[1.5rem]'  onClick={nextSLide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? 'slide current' : 'slide'}
            key={index}
          >
            {index === currentSlide && (
              <>
                <img
                  src={slide.image}
                  alt=''
                  className='object-cover w-full h-full opacity-[0.8]'
                />
                <div className='absolute top-[20rem] left-[25rem] max-w-4xl font-semibold text-center p-3 '>
                  <h2 className='text-white text-6xl'>{slide.heading}</h2>
                  <p className='text-white text-xl my-9'>{slide.dec}</p>
                  <button className='btn bg-green-600 text-gray-200 border-none'>Learn more</button>
                </div>

               
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Hero

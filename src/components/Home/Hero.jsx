import { hero, HeroBg } from '../../assets/Images'
import { HeroData } from '../../data'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-22 mt-[6rem] px-16 '>
      <div className='flex flex-wrap lg:flex-row-reverse items-center justify-center'>
        <div className='w-full lg:w-[50%]'>
          <div className='flex items-center justify-center lg:p-8'>
            <Swiper
              className='h-[42rem] p-[2rem]  relative'
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: true
              }}
              pagination={{
                clickable: true
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
            >
              {HeroData.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img.image}
                    alt=''
                    className='border-stone-900 h-[500px] w-full rounded-3xl'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className='w-full lg:w-[50%] '>
          <div className='flex flex-col items-center justify-center lg:items-start mt-10'>
            <h2 className=' pb-2 text-3xl tracking-tighter bg-gradient-to-r lg:text-5xl lg:font-semibold from-stone-300 to-stone-600 text-transparent bg-clip-text'>
              Fresh, Local, and Organic Vegetables Delivered to Your Doorstep
            </h2>
            <span className='bg-gradient-to-r  from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>
              At Harmony Vegetable Home, we believe in providing the freshest
              vegetables straight from local farms to your kitchen. Our wide
              variety of organic produce is carefully selected to ensure you
              enjoy only the best, healthiest, and most nutritious options for
              your family.
            </span>

            <p className='my-2  max-w-lg py-6 text-xl leading-relaxed tracking-tighter'></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

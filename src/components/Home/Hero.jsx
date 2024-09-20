
import { hero } from '../../assets/Images'


const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36 mt-[10rem] px-16 '>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-full lg:w-[50%]'>
          <div className='flex items-center justify-center lg:p-8'>
            <img
              src={hero}
              alt=''
              className=' border border-stone-900 h-[500px] rounded-3xl'
              width={350}
              height={650}
            />
          </div>
        </div>

        <div className='w-full lg:w-[50%] '>
          <div className='flex flex-col items-center justify-center lg:items-start mt-10'>
            <h2 className=' pb-2 text-3xl tracking-tighter bg-gradient-to-r lg:text-8xl from-stone-300 to-stone-600 text-transparent bg-clip-text'>
              Harmony Veg Home
            </h2>
            <span className='bg-gradient-to-r  from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>
              Frontend Developer
            </span>

            <p className='my-2  max-w-lg py-6 text-xl leading-relaxed tracking-tighter'></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

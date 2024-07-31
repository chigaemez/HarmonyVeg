import { useState, useEffect, useContext } from 'react'
import { shoppingData, sliderData } from '../../data'
import { hero } from '../../assets/Images';
import CartContext from '../../Context/CartContext';
import { IoClose } from 'react-icons/io5';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowinput] = useState(false)
  const Globalstate = useContext(CartContext)

  const dispatch = Globalstate.dispatch;

  const slideLength = shoppingData.length;

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const nextSLide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)

  }

  const prevSLide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])


  return (

    <div className=' '>

      <div></div>
      <div
        className='h-screen w-full   bg-cover -z-10 space-y-4 bg-center  bg-slate-900  bg-no-repeat  flex  justify-center'
        style={{ backgroundImage: `url(${hero})` }}
      >


        <div className='  lg:w-[80%] w-[90%] h-[95vh] p-4 md:p-8 my-auto rounded-lg  flex from-[#171e44] to-[#4e4674] bg-gradient-to-br'>

          <div className="lg:w-[100%] w-[100%]   md:w-[100%] h-[88vh] gap-4 relative overflow-hidden ">

            <button className="btn btn-circle hover:bg-green-600 border-none absolute z-[899] lg:bottom-[0%] md:bottom-[0%]  bottom-[50%] lg:left-[31.9rem] = left-[0.5rem]" onClick={prevSLide} >❮</button>
            <button className="btn btn-circle hover:bg-green-600 border-none absolute z-[899] lg:bottom-[0%] md:bottom-[0%]  bottom-[50%] lg:right-[31.9rem]   right-[0.5rem]" onClick={nextSLide}>❯</button>

            {shoppingData.map((item, index) => {
              return (
                <div className={index === currentSlide ? "slide current" : "slide"} key={item.id}>
                  {index === currentSlide && (
                    <>
                      <div className=' rounded-3xl lg:w-[30%] h-[80vh] md:w-[80%]   w-full'>
                        <img src={item.image} className=" rounded-3xl mx-auto object-cover h-[70%]" alt="Tailwind CSS Carousel component" />
                        <div className="flex flex-col">
                          <p className='text-green-600 px-3 py-3 text-xl font-medium'>{item.name}</p>

                          <h1>{inputValue}</h1>
                          <hr className='h-1 bg-gradient-to-br flex from-[#171e44] to-[#4e4674]' />
                          <div className="flex justify-between  w-full items-center px-3">

                            <h1 className='text-xl my-2 text-gray-100 font-medium '><span>&#x20A6;</span>{item.price} </h1>
                            <button className='btn my-9 w-[40%] bg-green-500 border-none mx-3 text-white' onClick={() => dispatch({ type: "ADD", payload: item })}>Buy Now</button>
                          </div>

                        </div>
                      </div>

                      {
                        showInput && (
                          <div className="card bg-base-100 w-[40%] absolute shadow-xl">
                            <div className="flex items-center justify-end px-3 py-3">
                              <IoClose className='text-2xl flex items-center cursor-pointer' />
                            </div>

                            <div className="card-body">
                              <h2 className="card-title">Please Input Your desire amount of KG</h2>
                              <input
                                type="number"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Amount in kg"
                                className="input input-bordered input-success w-full max-w-xs outline-none" />
                              <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      <div className="lg:flex md:w-[70%] hidden md:flex flex-col text-left flex-0  h-[80vh] rounded-lg justify-center items-center ">
                        <div className="flex flex-col lg:w-[70%]">
                          <h1 className='text-lg text-gray-700'>Use the <span className='font-bold text-green-500'>cart</span> for checkout of your product</h1>
                          <p className='text-gray-600 text-xl'> <span className='text-2xl text-green-600 font-bold'> {item.name}</span> can now be purchased</p>
                          <p className='text-base '>{item.dec}</p>
                          <button className='btn my-9 w-[40%] bg-green-500 border-none mx-3 text-white'>shop Now</button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )
            })}


          </div>



        </div>

      </div>

    </div>

  )
}

export default Hero

import React from 'react'
import {TiLeaf, TiHome} from 'react-icons/ti'
import { } from 'react-icons/ai'


const Farm = () => {
  return (
    <div className='bg-slate-100 h-[60vh]'>
        <div className="flex flex-wrap gap-[25px] justify-center  w-[74%] items-center h-full mx-auto">
          <div className="flex-col flex text-left w-[23%]">
            <TiLeaf className='text-green-600 text-6xl'/>
            <h1 className='text-2xl text-gray-800 my-4 font-bold'>Natural Plants</h1>
            <p className='text-gray-600'>We use the modern means of farm production to grow our plants and vagetables </p>
          </div>
          <div className="flex-col flex text-left w-[23%]">
            <TiHome className='text-green-600 text-6xl'/>
            <h1 className='text-2xl text-gray-800 my-4 font-bold'>Owned Farm</h1>
            <p className='text-gray-600'>We use the modern means of farm production to grow our plants and vagetables </p>
          </div>
          <div className="flex-col flex text-left w-[23%]">
            <TiLeaf className='text-green-600 text-6xl'/>
            <h1 className='text-2xl text-gray-800 my-4 font-bold'>Modern farm</h1>
            <p className='text-gray-600'>We use the modern means of farm production to grow our plants and vagetables </p>
          </div>
          <div className="flex-col flex text-left w-[23%]">
            <TiLeaf className='text-green-600 text-6xl'/>
            <h1 className='text-2xl text-gray-800 my-4 font-bold'>100% organic</h1>
            <p className='text-gray-600'>We use the modern means of farm production to grow our plants and vagetables </p>
          </div>
        </div>
    </div>
  )
}

export default Farm
import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/About/About'
import Farm from '../components/Our_Farm/Farm'
import Product from '../components/Our_product/Product'
import Team from '../components/Our_Team/Team'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Farm />
      <Product />
      <Team />
    </div>
  )
}

export default Home
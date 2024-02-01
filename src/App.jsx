import { Route, } from 'react-router-dom'
import Hero from './components/Home/Hero'
import About from './components/About/About'
import Farm from './components/Our_Farm/Farm'
import Product from './components/Our_product/Product'
import Blog from './components/blog/blog'
import Team from './components/Our_Team/Team'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <Hero />
      <About />
      <Farm />
      <Product />

      <Blog />
      <Team/>
      <Footer/>
    </>
  )
}

export default App

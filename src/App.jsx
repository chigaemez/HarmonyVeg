import { Route, Routes, } from 'react-router-dom'
import Hero from './components/Home/Hero'
import About from './components/About/About'
import Farm from './components/Our_Farm/Farm'
import Product from './components/Our_product/Product'
import Blog from './components/blog/blog'
import Team from './components/Our_Team/Team'
import Footer from './components/Footer'
import Cart from './Pages/Cart'
import Header from './components/Header'
import { useState } from 'react'
import Home from './Pages/Home'


function App() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Header isOpen={setOpen} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart isOpen={open} onClose={() => setOpen(false)} />}/>
      </Routes>

      

     
      <Footer />

    </div>
  )
}

export default App

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Features from './pages/Features'
import Price from './pages/Price'
import Quote from './pages/Quote'
import Service from './pages/Service'
import Teams from './pages/Teams'
import Testimonials from './pages/Testimonials'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/features' element={<Features />} />
        <Route path='/price' element={<Price />} />
        <Route path='/quote' element={<Quote />} />
        <Route path='/team' element={<Teams />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/services' element={<Service />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

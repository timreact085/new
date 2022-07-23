import React from 'react'
import '../main.scss'

import Header from './Header'
import Header2 from './Header2'
import Footer from './Footer'
import HomePage from './HomePage/HomePage'
import Services from './Services/Servisec'
import {  BrowserRouter, Routes
 } from "react-router-dom";
  import {  Route } from "react-router";
 
import Blog from './Blog'
// import Home from './Home'
 const App = () => {

  
  return (
    <BrowserRouter>
    <div className='container'>
      
    
    <Header  />
  
    <Routes>
                <Route  path="/" element={<HomePage />} />
                <Route path="services" element={<Services />}/>
                <Route   path="/blog" element={<Blog />}/>
            </Routes>
            
           <Footer />
    </div>
    </BrowserRouter>
  )
}


export default App
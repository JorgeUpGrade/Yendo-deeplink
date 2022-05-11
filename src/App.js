import React, {useState, useEffect} from 'react'
import Event from './Event'
import Footer from './Footer'
import Header from './Header'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
   <div><div className="app">
       <Header/>
    <Routes>
    <Route path=":id" element={<Home />} />
    </Routes>
     </div> 
     <Footer/>
     </div> 
  )
}

export default App
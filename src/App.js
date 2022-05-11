import React from 'react'
import Event from './Event'
import Footer from './Footer'
import Header from './Header'
import "./App.css"

function App() {
  return (
    <div className="app">
    <Header/>
    <div className="app_display">
    <Event/>
    <Footer/>
    </div>
     </div> 
  )
}

export default App
import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className = 'footer'> 
    <button className='footer_button'>Ábrelo en la app</button>
    <h2 className="footer_download">Si aún no la tienes, déscargatela en</h2>
    <img src="images/appstore.png"   alt="" className="footer_appstore" />
    <img src="images/google-icon-download-in-flat-style.png"  alt="" className="footer_googleplay" />     
 </div>
  )
}

export default Footer
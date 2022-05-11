import React from 'react'
import './Event.css'

function Event() {
  return (
    <div className='event'>
    <img src="/images/imagen_plan.jpg" alt="" />
    <h1 className="event_title">Titulo del Evento</h1>
    <h2 className="event_time">25/04/2022 17:00</h2>
    <h3 className="event_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit i
    n voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden
   </h3>
   <h2 className="event_download">Para ver más, déscargate la app</h2>
   
    </div>
  )
}

export default Event
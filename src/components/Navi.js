import React from 'react'
import worldimage from '../assets/world.jpg'

function Navi(){
  return(
    <div className='Navigation'>
    <img src={worldimage} className="myimage"/>
    <p className='p'>My Travel Journal</p>
  </div>
  )
}

export default Navi
import React from 'react'
import worldimage from '../assets/world.jpg'

function Navi(){
  return(
    <div className='Navigation'>
    <div className='image'>
    <img src={worldimage} className="myimage"/>
    <div className='Text'>

        <p className='p'>My Travel Journal </p>
    </div>
    </div>
  </div>
  )
}

export default Navi
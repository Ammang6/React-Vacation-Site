import React from 'react'

const Trips = (props) => {
  return (
    
        <div className='my'>
            <img className='placeimage' src ={`${props.item.imageUrl}`}></img>
            <img></img>
            <p>{props.item.location}</p>
        </div>
  
  )
}

export default Trips
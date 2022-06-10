import React from 'react'
import location from '../assets/location.png'
const Trips = (props) => {
  return (
    
        <div className='my'>
            <img className='placeimage' src ={`${props.item.imageUrl}`}></img>
            <img className= 'loc'src={location}></img>
            <p className='text'>{props.item.location}</p>
            <a className='link' href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
            <p className='title'>{props.item.title}</p>
            <p className='date'>{props.item.startDate}-{props.item.endDate}</p>
            <p className='description'>{props.item.description}</p>
        </div>
  
  )
}

export default Trips
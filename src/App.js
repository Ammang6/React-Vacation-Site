import './App.css';
import Navi from './components/Navi';
import Trips from './components/Trips';
import React from 'react';
import data from './data';



export default function App(){
  const trips = data.map(item =>{
      return (
          <Trips
              item = {item}
          />

      )

  })
    return  (
        <div>
          <Navi />
          {trips}
        </div>

    )
}



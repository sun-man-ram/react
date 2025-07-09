import React from 'react'
// use state
import { useState } from 'react'
const StateMgm = () => {
    const [city,setCity]=useState("HYderabad");

    console.log(city)
    // setCity="Delhi" wrong approach
    if(city=="Goa"){
        setCity("Banglore");
    }
    else{
        setCity("delhi");
    }
    console.log(city);
    // setCity("Delhi");
    console.log(city);
  return (
    <div>
      <h1>
        I live in {city}
      </h1>
    </div>
  )
}
export default StateMgm

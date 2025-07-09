import React from 'react'
// use state
import { useState,useEffect} from 'react'
const StateMgm = () => {
    const [city,setCity]=useState("HYderabad");
    useEffect(()=>{
         if(city=="Goa"){
        setCity("Banglore");
    }
    else{
        setCity("delhi");
    }
    },[city])
    console.log(city)
    // setCity="Delhi" wrong approach

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

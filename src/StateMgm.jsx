import React from 'react'
// use state
import { useState } from 'react'
const StateMgm = () => {
    const [city,setCity]=useState("HYderabad")
    console.log(city)
    // setCity="Delhi" wrong approach
    setCity("Delhi");
    console.log(city);
  return (
    <div>
      StateMgm
    </div>
  )
}
export default StateMgm

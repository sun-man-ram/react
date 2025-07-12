import React from 'react'
import { useState } from 'react'
const ClickEvent = () => {
    const [number,setNumber]=useState(0);
    const increment=()=>{
        setNumber(number+1)
    }
    const decrement=()=>{
        setNumber(number-1)
    }
    const reset=()=>{
        setNumber(0);
    }
  return (
    <div>
        <h1>
      {number}

        </h1>
      <button onClick={increment}>
        increment
      </button>
      <button onClick={decrement}>
        decrement
      </button>
      <button onClick={reset}>
       reset 
      </button>
    </div>
  )
}

export default ClickEvent

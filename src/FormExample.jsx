import React, { useState } from 'react'

const FormExample = () => {

    const [username,setUserName]=useState("")
    const [newUserDetails,setNewUserDetails]=useState()
    const getUserName=(event)=>{
        setUserName(event.target.value)
    }
    const userDetails=()=>{
    setNewUserDetails(username)
    }

  return (
    <div>
      <section className='formSection'>
        <h2>hello {newUserDetails}</h2>
        <div className='inputDiv'>
            <input type="text" placeholder='Enter your name' onChange={getUserName} />
            <br />
            <button className='submitBtn'onClick={userDetails}>Submit</button>
        </div>
      </section>
    </div>
  )
}

export default FormExample
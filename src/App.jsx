import React from 'react'
import './App.css';
import FirstComp from './propsContainer/FirstComp';
import SecondComp from './propsContainer/SecondComp';
import ThirdComp from './propsContainer/ThirdComp';
import FourtComp from './propsContainer/FourtComp';
// import officeImage from './office.png';
// import office from './public/office.png';
let a="Apple"
let b ="Banana"


const user={
  name:"Shiva",
  city:"hyderaabd"
}



function App() {
  return (
    <div>
     <FirstComp name='Mani'/>
       <SecondComp name={user.city}/>
         <ThirdComp name='reddy'/>
           <FourtComp name='Tony'/>
      </div>

  )
}

export default App

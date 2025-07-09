import React from 'react'
import './App.css';
import FirstComp from './propsContainer/FirstComp';
import SecondComp from './propsContainer/SecondComp';
import ThirdComp from './propsContainer/ThirdComp';
import FourtComp from './propsContainer/FourtComp';
import StateMgm from './StateMgm';
// import officeImage from './office.png';
// import office from './public/office.png';
let a="Apple"
let b ="Banana"


const user={
  name:"Shiva",
  city:"hyderaabd"
}

const myCar={
  model:"tata",
  year:"2024",
  dealer:"mani",
  color:"red"
}

function App() {
  return (
    <div>
     
     <StateMgm/>
      </div>

  )
}

export default App

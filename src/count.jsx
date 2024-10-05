import { useState } from "react"
function Count(){
    let [counter, setCounter] = useState(10)
  
  //let counter = 0
  console.log("Count form count.jsx");
  const addValue = ()=>{
    if(counter<20)
    setCounter(counter+1)
  if(counter >= 20){
    setCounter(0)
    alert("value should be less than 20")
  }

    
  }
  const removeValue = ()=>{
    if(counter >0)
    setCounter(counter-1)
  else {
    alert("value should be greater than 0")
    setCounter(0)
  }
  
    
  }
 return (
    <>
    

    <h1 className='bg-green-400 text-black'>Chai aur React </h1>
    <h2>Counter Value : {counter}</h2>
    <button
    onClick={addValue}
    >Add Value</button>
    <button 
    onClick={removeValue}
    >Remove value</button>
</ >
 )
}

export default Count;
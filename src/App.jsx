import Chai from "./chai"
import Count from "./count";
// import Test from "./test"
import { useState } from "react";
import Card from "./components/Card";

function App() {

  let myObj={
    username : "sam",
    age : 21
  }  
  

  return (
    
    <>
      <Card username="samyack" age="21" />
      <Card   age = "22" />
    <Chai />
    <Count />

    </>
    
  )
}

export default App

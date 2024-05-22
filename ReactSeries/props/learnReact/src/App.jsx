import { useState } from 'react'
//import  ProductTab  from './productTab'
// import Msg from './Msg'
//import Button from './button'
 function Sub(){
    console.log("hii");
 }
function Button() {
  return (
      <div>
          <button onClick={Sub}>Click me!</button>
      </div>
  );
}
function App() {
  

  return (
    <>
    <Button/>
     
    </>
  )
}

export default App

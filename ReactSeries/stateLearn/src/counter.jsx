import { useState } from "react"

export default function Counter(){
  let [cnt,setcnt]=useState(0);
 
   function inc(){
    //    cnt++;
    //    setcnt(cnt)
    // if perlal uodate counter using two fun
    setcnt((currCnt)=>{
        return currCnt+1;
    })
    setcnt((currCnt)=>{
        return currCnt+3;
    })
   }
    return (
        <>
         <p>counter={cnt}</p>
         <button onClick={inc}>click me! </button>
        </>
    )
}
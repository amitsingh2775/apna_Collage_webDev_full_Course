import { useState } from "react"
export default function Ludo(){
    let [moves,setMoves]=useState({
        blue:0,
        red:0,
        green:0,
        yellow:0
    })
 return (
    <>
    <div>
        <h2>let's Start Game</h2>
        <div className="board">
          <p>blue Move={moves.blue}</p>
          <button style={{backgroundColor:"blue",color:"white"}}>Draw</button>
          <p>yellow Move={moves.blue}</p>
          <button style={{backgroundColor:"yellow"}}>Draw</button>
          <p>Red Move={moves.blue}</p>
          <button style={{backgroundColor:"red",color:"white"}}>Draw</button>
          <p>Green Move={moves.blue}</p>
          <button style={{backgroundColor:"green",color:"white"}}>Draw</button>
        </div>
        </div>
    </>
 )
}
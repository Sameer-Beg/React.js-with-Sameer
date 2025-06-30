import React, { useState } from 'react'

const V7_usestate = () => {
    const [counter , setcounter] = useState(0);
    const increaseby1 = () =>{
        setcounter(counter + 1)
    }
    const decreaseby1 = () =>{
        setcounter(counter - 1)
    }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseby1}>increase</button>
      <button onClick={decreaseby1}>decrease</button>
    </div>
  )
}


export default V7_usestate

import React from 'react'

const V5_events = () => {
    const handclick = () =>{
        alert("You click the button")
    }
  return (
    <div>
      <h1>Here we larn events in react.js</h1>
      <button onClick={handclick}>Click me </button> <br />
      <button onMouseEnter={handclick}>Click me </button>
    </div>
  )
}
export default V5_events

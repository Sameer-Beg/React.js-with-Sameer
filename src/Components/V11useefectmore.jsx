import React, { useEffect, useState } from 'react'

const V11useefectmore = () => {
    const [counter , setCounter] = useState(10)  // Correct: useState for state management

    useEffect(()=>{
        document.title = counter
        console.log("useEfect is running")
    }, [counter])

    return (
        <>
            <div>
                <button onClick={() => setCounter(counter + 1)}>Click me Increase</button>
                <p>Counter: {counter}</p> <br />
                <button onClick={()=> setCounter(counter - 1)}>Click me Decrease </button>
            </div>
        </>
    )
}

export default V11useefectmore

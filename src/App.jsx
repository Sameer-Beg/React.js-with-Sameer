import React from 'react'
import V1_variabledeclare from './Components/V1_variabledeclare'
import V2_reusableComponent from './Components/V2_reusableComponent'


const App = () => {
  return (
    <>
    {/* <div>
      <V1_variabledeclare/>
    </div> */}

    <div>
      <V2_reusableComponent/>
      <V2_reusableComponent/>
      <V2_reusableComponent/>
      <V2_reusableComponent/>
    </div>
    </>
  )
}

export default App

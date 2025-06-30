import React from 'react'
import V1_variabledeclare from './Components/V1_variabledeclare'
import V2_reusableComponent from './Components/V2_reusableComponent'
import V3_problem1 from './Components/V3_problem1'
import V4_TerrnoryOperater from './Components/V4_TerrnoryOperater'
import V5_events from './Components/V5_events'


const App = () => {
  return (
    <>
    {/* <div>
      <V1_variabledeclare/>
    </div> */}

    {/* <div>
      <V2_reusableComponent/>
      <V2_reusableComponent/>
      <V2_reusableComponent/>
      <V2_reusableComponent/>
    </div> */}


    {/* <div>
      <V3_problem1 title="Phone" brand="Aplle" price={100000}/>
      <V3_problem1 title="Lapi" brand="Mac" price={200000}/>
    </div> */}


    {/* <div>
      <V4_TerrnoryOperater name = "sameer beg" age = {20}/>
    </div> */}


    <div>
      <V5_events/>
    </div>


    </>
  )
}

export default App

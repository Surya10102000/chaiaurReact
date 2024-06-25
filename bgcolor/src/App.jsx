import React, { useState } from 'react'
import Bar from './components/Bar'

const App = () => {

  const [color , setColor ] = useState("olive")


  return (
    <>
    <div className='h-screen duration-200'
    style={{backgroundColor : color}}>
      background
    </div>
    <Bar setColor={setColor}/>
    </>
  )
}

export default App
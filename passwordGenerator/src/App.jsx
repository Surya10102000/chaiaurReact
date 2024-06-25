import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

const App = () => {
  const [length , setLength] = useState(8)
  const [allowNumber , setAllowNumber] = useState(false)
  const [allowChar , setAllowChar] = useState(false)
  const [password , setPassword ] = useState("")

  const passwordGen = useCallback( ()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
    if(allowNumber) str += "0123456789"
    if(allowChar) str+= "!@#$%^&*`~,./?"
    
      for( let i = 0; i < length ; i++){
        let char = Math.floor(Math.random() * str.length + 1 )
        pass += str.charAt(char)
      }

      setPassword(pass)

  }, [length, allowChar,allowNumber, setPassword])

  
  return (
    <> 
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>sjdlajdakldjasdkjalsdjalskdjdlkajsdskd</div>
    </>
  )
}

export default App
import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './Login'
import Profile from './Profile'

const App = () => {
  return (
    <UserContextProvider>

    <h1>Home</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
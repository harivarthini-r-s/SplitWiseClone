import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import Homepage from '../Pages/Homepage/homepage'

function Index() {

  // const route = ['/login','/signup']
  return (
    <>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Homepage/>} />
        </Routes>
    </>
  )
}

export default Index
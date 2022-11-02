import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import Homepage from '../Pages/Homepage/Homepage'
import Dashboard from '../Pages/Dashboard/Dashboard'

function Index() {

  // const route = ['/login','/signup']
  return (
    <>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Homepage/>} />
            <Route path ='/dashboard' element = {<Dashboard/>}/>
        </Routes>
    </>
  )
}

export default Index
import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import AllPuppies from './components/AllPuppies'
import SinglePuppy from './components/SinglePuppy'
import Form from './components/Form'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<AllPuppies/>}/>
        <Route path='/players/:id' element={<SinglePuppy/>}/>
        <Route path='/signup' element={<Form/>}/>
      </Routes>
    </>
  )
}

export default App

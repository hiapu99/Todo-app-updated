import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Create from './page/Create'
import Update from './page/Update'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post' element={<Create/>}/>
        <Route path='/put' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

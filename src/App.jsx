import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

function App() {


  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </main>
    </>
  )
}

export default App

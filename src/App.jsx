import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Landing from './pages/Landing/Landing'

import { getAdvice } from "./services/advice-api"

import './App.css'

function App() {
  const [advice, setAdvice] = useState({})
  
  
  useEffect(() => {
    const fetchAdvice = async () => {
      const adviceData = await getAdvice()
      setAdvice(adviceData)
      console.log(adviceData)
    }
    fetchAdvice()
  }, [])

  if (!advice) return <h1>Want Some Advice?</h1>

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Landing advice={advice} />} />
        </Routes>
      </main>
    </>
  )
}

export default App

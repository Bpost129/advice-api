import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Landing from './pages/Landing/Landing'

import { getAdvice } from "./services/advice-api"

import './App.css'

function App() {
  const [quote, setQuote] = useState({})
  
  const fetchAdvice = async () => {
    const adviceData = await getAdvice()
    setQuote(adviceData.slip.advice)
    console.log(adviceData.slip)
  }
  
  useEffect(() => {
    fetchAdvice()
  }, [])

  if (!quote.length) return <h1>Want Some Advice?</h1>

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Landing quote={quote} fetchAdvice={fetchAdvice} />} />
        </Routes>
      </main>
    </>
  )
}

export default App

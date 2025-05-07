import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from './components/Nav/NavBar'
import Landing from './pages/Landing/Landing'
import Advice from './pages/Advice/Advice'
import Trivia from './pages/Trivia/Trivia'

import { getAdvice } from "./services/advice-api"
import { getTriviaQuestions } from './services/trivia-api'

import './App.css'

function App() {
  const [quote, setQuote] = useState({})
  const [questions, setQuestions] = useState([])
  
  const fetchAdvice = async () => {
    const adviceData = await getAdvice()
    setQuote(adviceData.slip.advice)
    // console.log('quote::' + adviceData.slip.advice)
  }

  const fetchTrivia = async () => {
    const questionData = await getTriviaQuestions()
    setQuestions(questionData.results)
    // console.log('questions::' + questionData.results)
  }
  
  useEffect(() => {
    fetchAdvice()
    fetchTrivia()
  }, [])

  if (!quote.length) return <h1>Want Some Advice?</h1>

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/advice' element={<Advice quote={quote} fetchAdvice={fetchAdvice} />} />
          <Route path='/trivia' element={<Trivia questions={questions} />} />
        </Routes>
      </main>
    </>
  )
}

export default App

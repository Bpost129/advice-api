import { useState, useEffect } from "react"

import { getTriviaQuestions } from "../../services/trivia-api"

import QuestionCard from "../../components/QuestionCard/QuestionCard"

const Trivia = () => {
  const [questions, setQuestions] = useState([])

  const fetchTrivia = async () => {
    const questionData = await getTriviaQuestions()
    setQuestions(questionData.results)
    console.log("questions:: " + questionData.results)
  }
  
  useEffect(() => {
    fetchTrivia()
  }, [])

  if (!questions.length) return <h1>Loading Questions...</h1>

  return (
    <>
      <h1>Test out some Trivia!</h1>
      <div className="questions">
        {questions.map(question => 
          <QuestionCard key={question.id} question={question} />
        )}
      </div>
    </>
  )
}

export default Trivia
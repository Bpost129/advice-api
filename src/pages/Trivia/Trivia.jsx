import { useState, useEffect } from "react"

import QuestionCard from "../../components/QuestionCard/QuestionCard"

import { getTriviaQuestions } from "../../services/trivia-api"

const Trivia = () => {
  const [questions, setQuestions] = useState([])

  const fetchTrivia = async () => {
    const questionData = await getTriviaQuestions()
    setQuestions(questionData.results)
  }
  
  useEffect(() => {
    fetchTrivia()
  }, [])

  // if (!questions.length) return <h1>Loading Questions...</h1>

  return (
    <>
      <h1>Test out some Trivia!</h1>
      {questions && 
      <div className="questions">
        {questions.map(question => 
          <QuestionCard key={question._id} question={question} />
        )}
      </div>
      }
    </>
  )
}

export default Trivia
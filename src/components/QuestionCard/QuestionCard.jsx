const QuestionCard = ({ question }) => {
  return (
    <div className="question-card">
      <h3>{question.question}</h3>
      <ul>
        <li>{question.correct_answer}</li>
        {question.incorrect_answers.map(ans =>
          <li key={ans}>{ans}</li>
        )}
      </ul>
    </div>
  )
}

export default QuestionCard
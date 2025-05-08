const QuestionCard = ({ question }) => {
  return (
    <div className="question-card">
      <h3>{question.question}</h3>
      <select>
        <option>{question.correct_answer}</option>
        {question.incorrect_answers.map(ans =>
          <option key={ans}>{ans}</option>
        )}
      </select>
    </div>
  )
}

export default QuestionCard
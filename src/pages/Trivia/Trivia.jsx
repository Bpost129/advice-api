const Trivia = ({ questions }) => {

  console.log(questions)
  return (
    <>
      <h1>Test out some Trivia!</h1>
      {questions.map(quest => 
        <p>{quest.question}</p>
      )}
    </>
  )
}

export default Trivia
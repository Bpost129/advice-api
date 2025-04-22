// import { useState, useEffect } from "react"

// import { getAdvice } from "../../services/advice-api"

const Landing = ({ quote, fetchAdvice }) => {
  if (!quote.length) return <h1>Want Some Advice?</h1>

  return (
    <>
      <h1>Want Some Advice?</h1>
      <p>{quote}</p>
      <button onClick={() => fetchAdvice()}>Need More Advice?</button>
    </>
  )
}

export default Landing
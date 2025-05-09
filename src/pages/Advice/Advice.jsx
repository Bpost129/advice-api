import { useState, useEffect } from "react"

import { getAdvice } from "../../services/advice-api"

const Advice = () => {
  const [quote, setQuote] = useState({})
  
  const fetchAdvice = async () => {
    const adviceData = await getAdvice()
    setQuote(adviceData.slip.advice)
  }
  
  useEffect(() => {
    fetchAdvice()
  }, [])

  if (!quote.length) return <h1>Advice?</h1>

  return (
    <>
      <h1>Want Some Advice?</h1>
      {/* <p>#{quote.id}</p> */}
      <div id="advice-container">
        <p>{quote}</p>
        <button id="refresh-btn" onClick={() => fetchAdvice()}>Need More Advice?</button>
      </div>
    </>
  )
}

export default Advice
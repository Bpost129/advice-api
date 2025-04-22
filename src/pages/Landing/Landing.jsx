// import { useState, useEffect } from "react"

// import { getAdvice } from "../../services/advice-api"

const Landing = ({ quote, fetchAdvice }) => {
  // const [advice, setAdvice] = useState({})

  // const fetchAdvice = async () => {
  //   const adviceData = await getAdvice()
  //   setAdvice(adviceData)
  //   console.log(adviceData)
  // }

  // useEffect(() => {
  //   fetchAdvice()
  // }, [])

  if (!quote.length) return <h1>Want Some Advice?</h1>

  return (
    <>
      <h1>Want Some Advice?</h1>
      {/* <p>{quote.slip.advice}</p> */}
      <button onClick={() => fetchAdvice()}>Need More Advice?</button>

    </>
  )
}

export default Landing
import { useState, useEffect } from "react"

import { getJoke } from "../../services/joke-api"

const Jokes = () => {
  const [joke, setJoke] = useState({})

  const fetchJoke = async () => {
    const jokeData = await getJoke()
    setJoke(jokeData)
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  if (!joke) return <h1>Thinking of a Joke...</h1>

  return (
    <>
      <h1>Want to hear a Joke?</h1>

    </>
  )
}

export default Jokes
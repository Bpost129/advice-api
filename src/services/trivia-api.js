const baseUrl = "https://opentdb.com/api.php?amount=15&type=multiple"

export async function getTriviaQuestions() {
  const res = await fetch(`${baseUrl}`)
  return res.json()
}
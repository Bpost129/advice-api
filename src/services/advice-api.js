const baseUrl = 'https://api.adviceslip.com/advice'

export async function getAdvice() {
  const res = await fetch(`${baseUrl}`)
  return res.json()
}
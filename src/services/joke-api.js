const baseUrl = "https://dad-jokes.p.rapidapi.com"

export async function getJoke() {
  const res = await fetch(`${baseUrl}/random/joke`)
  return res.json()
}
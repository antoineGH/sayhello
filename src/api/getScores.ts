export const getScores = async (profileID: number) => {
  try {
    const dataScores = await fetch(
      `http://localhost:4000/result?profile_id=${profileID}`
    )
    const json = await dataScores.json()
    return json
  } catch (e) {
    throw new Error(`Fail to fetch results: ${e}`)
  }
}

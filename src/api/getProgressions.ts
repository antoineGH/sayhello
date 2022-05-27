export const getProgressions = async (profileID: number) => {
  try {
    const dataProgressions = await fetch(
      `http://localhost:4000/progression?profile_id=${profileID}`
    )
    const json = await dataProgressions.json()
    return json
  } catch (e) {
    throw new Error(`Fail to fetch progressions: ${e}`)
  }
}

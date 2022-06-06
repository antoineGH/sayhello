export interface Result {
  id: number
  score: number
  date_created: string
  profile_id: number
  quiz_id: number
}

export type Results = Result[]

export interface Result {
  id: number
  score: number
  date_created: string
  profile_id: number
  quiz_id: number
  quiz_name: string
  lesson_id: number
  lesson_name: string
}

export type Results = Result[]

export interface ResultAddIn {
  score: number
  profile_id: number
  quiz_id: number
  date_created: string
}

export interface ResultPutIn {
  id: number
  score: number
}

export interface ResultPutOut {
  id: number
  changes: Result
}

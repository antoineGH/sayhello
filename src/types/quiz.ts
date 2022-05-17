export type Questions = Question[]

export interface Question {
  id: number
  question: string
  quiz_id: number
  options: Option[]
}

export interface Option {
  id: number
  option: string
  correctness: boolean
  question_id: number
}

export interface QuizSummaryProps {
  quizID: number
  quizName: string
  lessonID: number
  lessonName: string
  difficulty: number
  numberQuestion: number
  score: number
  handleQuiz: (quizID: number) => void
}

export interface QuizContentProps {
  questions: Questions
}

import { LessonsLight } from './lesson'

export interface Course {
  id: number
  name: string
  duration: number
  difficulty: number
  numberLesson: number
  numberQuiz: number
  progressionID: number
  completed: number
  tags: string[]
}

export type Courses = Course[]

export interface CourseSummaryProps {
  id: number
  name: string
  duration: number
  difficulty: number
  completed: number
  numberLesson: number
  numberQuiz: number
  tags: string[]
  handleCourse: (courseID: number) => void
  isNotEnrolled: boolean
}

export interface CourseContentProps {
  lessons: LessonsLight
  tags: string[]
  course: Course
}

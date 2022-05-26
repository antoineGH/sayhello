import { LessonsLight } from './lesson'

export interface Course {
  courseID: number
  name: string
  duration: number
  difficulty: number
  progressionID: number
  completed: number
  numberLesson: number
  numberQuiz: number
  tags: string[]
}

export type Courses = Course[]

export interface CourseSummaryProps {
  courseID: number
  courseName: string
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

interface Quiz {
  id: number
  name: string
  lesson_id: number
}

type Quizs = Quiz[]

interface Picture {
  id: number
  description: string
  url: string
  wikidata_id: number
}

interface Video {
  id: number
  description: string
  url: string
  wikidata_id: number
}

interface Wikidata {
  id: number
  title: string
  description: string
  lesson_id: number
  wikipicture: Picture[]
  wikivideo: Video[]
}

type Wikidatas = Wikidata[]

export interface LessonLight {
  id: number
  name: string
  author: string
  duration: number
  difficulty: number
  course_id: number
  completed: number
}

export type LessonsLight = LessonLight[]

export interface Lesson {
  id: number
  name: string
  author: string
  duration: number
  difficulty: number
  course_id: number
  course_name: string
  completed: number
  quizs: Quizs
  wikidatas: Wikidatas
}

export type Lessons = Lesson[]

export interface LessonContentProps {
  lesson: Lesson
  lessons: Lessons
}

export interface LessonSummaryProps {
  lessonID: number
  lessonName: string
  author: string
  duration: number
  difficulty: number
  completed: boolean
  courseID: number
  courseName: string
  handleLesson: (lessonID: number) => void
}

export interface LessonCardProps {
  handleClickLesson: (lessonID: number) => void
  lesson: LessonLight
}

export interface pictureDetails {
  id: number
  description: string
  url: string
}

export interface videoDetails {
  id: number
  description: string
  url: string
}

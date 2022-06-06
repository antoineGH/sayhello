import { Course } from 'types/course'
import { getCourses } from './getCourses'
import { getProgressions } from './getProgressions'

export const getProgressionCourse = (profileID: number, courses: Course[]) => {
  return getProgressions(profileID)
    .then(progressions => {
      const progressionsData = progressions.map((progression: any) => {
        const courseID = progression.course_id
        const progressionID = progression.id
        const progressionCompleted = progression.completed
        return getCourses(courseID, progressionID, progressionCompleted)
      })
      return Promise.all(progressionsData)
    })
    .then(response => {
      response.forEach((resp, count) => {
        courses.push(resp[0])
        courses[count].completed = response[count].completed
        courses[count].progressionID = response[count].progressionID
        count++
      })
      return courses
    })
}

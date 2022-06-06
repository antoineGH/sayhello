import { Course, Courses } from 'types/course'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProgressionCourse } from 'api/getProgressionCourse'

export const fetchCourses = createAsyncThunk<Courses, number>(
  'courses/fetchCourses',
  async profileID => {
    try {
      const courses: Course[] = []
      return getProgressionCourse(profileID, courses).then(() => {
        return courses
      })
    } catch (e) {
      throw new Error(`Fail to fetch courses: ${e}`)
    }
  }
)

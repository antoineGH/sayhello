import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCourses = createAsyncThunk<void, number>(
  'courses/fetchCourses',
  async profileID => {
    try {
      const dataProgression = await fetch(
        `http://localhost:4000/progression?profile_id=${profileID}`
      )
      await dataProgression.json().then(progressions => {
        progressions.forEach((progression: any) => {
          console.log(progression.completed)
          const courseID = progression.course_id
          fetch(`http://localhost:4000/course?id=${courseID}`).then(
            async courses => {
              await courses.json().then(courses => {
                courses.forEach((course: any) => {
                  console.log(course)
                  fetch(
                    `http://localhost:4000/tags?course_id=${courseID}`
                  ).then(async tags => {
                    await tags.json().then(tags => {
                      tags.forEach((tag: any) => {
                        console.log(tag)
                      })
                    })
                  })
                })
              })
            }
          )
        })
      })
    } catch (e) {
      throw new Error(`Fail to fetch courses: ${e}`)
    }
  }
)

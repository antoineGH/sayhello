import { Course } from 'types/course'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchCourses } from './actions'

export const coursesAdapter = createEntityAdapter({
  selectId: (course: Course) => course.id
})
export const coursesSlice = createSlice({
  name: 'courses',
  initialState: coursesAdapter.getInitialState({
    loading: false,
    error: false,
    courseActiveID: 0
  }),
  reducers: {},
  extraReducers: builder => {
    // fetchCourses
    builder.addCase(fetchCourses.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.loading = false
      console.log(action.payload)
      state.courseActiveID = action.payload[0].id
      coursesAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchCourses.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export default coursesSlice.reducer

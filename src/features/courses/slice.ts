import { Course } from 'types/course'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

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
  extraReducers: {}
})

export default coursesSlice.reducer

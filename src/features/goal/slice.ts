import { Goal } from 'types/goal'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

export const goalAdapter = createEntityAdapter({
  selectId: (goal: Goal) => goal.id
})

export const goalSlice = createSlice({
  name: 'goal',
  initialState: goalAdapter.getInitialState({
    loading: false,
    error: false
  }),
  reducers: {},
  extraReducers: {}
})

export default goalSlice.reducer

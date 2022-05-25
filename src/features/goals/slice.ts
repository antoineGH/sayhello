import { Goal } from 'types/goal'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchGoal } from './actions'

export const goalAdapter = createEntityAdapter({
  selectId: (goal: Goal) => goal.id
})

export const goalSlice = createSlice({
  name: 'goals',
  initialState: goalAdapter.getInitialState({
    loading: false,
    error: false
  }),
  reducers: {},
  extraReducers: builder => {
    // fetchGoal
    builder.addCase(fetchGoal.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchGoal.fulfilled, (state, action) => {
      state.loading = false
      goalAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchGoal.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export default goalSlice.reducer

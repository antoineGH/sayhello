import { Result } from 'types/result'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchResults } from './actions'

export const resultsAdapter = createEntityAdapter({
  selectId: (result: Result) => result.id
})

export const resultsSlice = createSlice({
  name: 'results',
  initialState: resultsAdapter.getInitialState({
    loading: false,
    error: false
  }),
  reducers: {},
  extraReducers: builder => {
    // fetchResults
    builder.addCase(fetchResults.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchResults.fulfilled, (state, action) => {
      state.loading = false
      console.log(action.payload)
      resultsAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchResults.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export default resultsSlice.reducer

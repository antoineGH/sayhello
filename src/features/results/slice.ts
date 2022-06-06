import { Result } from 'types/result'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import {
  addResult,
  deleteResult,
  fetchLastestResults,
  fetchResults,
  updateResult
} from './actions'

export const resultsAdapter = createEntityAdapter({
  selectId: (result: Result) => result.id
})

export const resultsSlice = createSlice({
  name: 'results',
  initialState: resultsAdapter.getInitialState({
    loading: false,
    error: false
  }),
  reducers: {
    resetResultError: state => {
      state.error = false
    }
  },
  extraReducers: builder => {
    // fetchResults
    builder.addCase(fetchResults.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchResults.fulfilled, (state, action) => {
      state.loading = false
      resultsAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchResults.rejected, state => {
      state.loading = false
      state.error = true
    })

    // fetchLastestResults
    builder.addCase(fetchLastestResults.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchLastestResults.fulfilled, (state, action) => {
      state.loading = false
      resultsAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchLastestResults.rejected, state => {
      state.loading = false
      state.error = true
    })

    // addResult
    builder.addCase(addResult.pending, state => {
      state.loading = true
    })
    builder.addCase(addResult.fulfilled, (state, action) => {
      state.loading = false
      resultsAdapter.addOne(state, action.payload)
    })
    builder.addCase(addResult.rejected, state => {
      state.loading = false
      state.error = true
    })

    // updateResult
    builder.addCase(updateResult.pending, state => {
      state.loading = true
    })
    builder.addCase(updateResult.fulfilled, (state, action) => {
      state.loading = false
      resultsAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload.changes
      })
    })
    builder.addCase(updateResult.rejected, state => {
      state.loading = false
      state.error = true
    })

    // deleteResult
    builder.addCase(deleteResult.pending, state => {
      state.loading = true
    })
    builder.addCase(deleteResult.fulfilled, (state, { payload: id }) => {
      state.loading = false
      resultsAdapter.removeOne(state, id)
    })
    builder.addCase(deleteResult.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export default resultsSlice.reducer
export const { resetResultError } = resultsSlice.actions

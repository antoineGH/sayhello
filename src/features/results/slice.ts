import { Result } from 'types/result'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

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
  extraReducers: {}
})

export default resultsSlice.reducer

import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { resultsAdapter } from './slice'

export const ResultsSelector = resultsAdapter.getSelectors(
  (state: RootState) => state.results
)

const getSlice = (state: RootState) => state.results

export const resultIsLoading = createSelector(getSlice, state => state.loading)
export const resultHasError = createSelector(getSlice, state => state.error)

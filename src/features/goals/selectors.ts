import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { goalsAdapter } from './slice'

export const goalsSelectors = goalsAdapter.getSelectors(
  (state: RootState) => state.goal
)

const getSlice = (state: RootState) => state.goal

export const stateIsLoading = createSelector(getSlice, state => state.loading)
export const stateHasError = createSelector(getSlice, state => state.error)

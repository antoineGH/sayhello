import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { goalAdapter } from './slice'

export const goalsSelectors = goalAdapter.getSelectors(
  (state: RootState) => state.goal
)

const getSlice = (state: RootState) => state.goal

export const goalIsLoading = createSelector(getSlice, state => state.loading)
export const goalHasError = createSelector(getSlice, state => state.error)
export const goalID = createSelector(getSlice, state => state.ids)
export const goalDays = createSelector(getSlice, state => state.entities)

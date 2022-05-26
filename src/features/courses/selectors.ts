import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { coursesAdapter } from './slice'

export const coursesSelectors = coursesAdapter.getSelectors(
  (state: RootState) => state.courses
)

const getSlice = (state: RootState) => state.courses

export const coursesIsLoading = createSelector(getSlice, state => state.loading)
export const coursesHasError = createSelector(getSlice, state => state.error)
export const coursesActiveID = createSelector(
  getSlice,
  state => state.courseActiveID
)

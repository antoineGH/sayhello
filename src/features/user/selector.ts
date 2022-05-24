import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { userAdapter } from './slice'

export const userSelector = userAdapter.getSelectors(
  (state: RootState) => state.user
)

const getSlice = (state: RootState) => state.user

export const userIsLoading = createSelector(getSlice, state => state.loading)
export const userHasError = createSelector(getSlice, state => state.error)

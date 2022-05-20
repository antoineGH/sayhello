import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { usersAdapter } from './slice'

export const usersSelectors = usersAdapter.getSelectors(
  (state: RootState) => state.users
)

const getSlice = (state: RootState) => state.users

export const userIsLoading = createSelector(getSlice, state => state.loading)
export const userHasError = createSelector(getSlice, state => state.error)

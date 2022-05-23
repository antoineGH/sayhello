import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { profilesAdapter } from './slice'

export const profilesSelectors = profilesAdapter.getSelectors(
  (state: RootState) => state.profiles
)

const getSlice = (state: RootState) => state.profiles

export const profileIsLoading = createSelector(getSlice, state => state.loading)
export const profileHasError = createSelector(getSlice, state => state.error)
export const profileActive = createSelector(getSlice, state => state.active)

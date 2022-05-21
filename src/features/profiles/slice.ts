import { Profile } from 'types/profile'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { deleteProfile, fetchProfiles } from './actions'

export const profilesAdapter = createEntityAdapter({
  selectId: (profile: Profile) => profile.id
})

export const profilesSlice = createSlice({
  name: 'profiles',
  initialState: profilesAdapter.getInitialState({
    loading: false,
    error: false
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProfiles.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProfiles.fulfilled, (state, action) => {
      state.loading = false
      profilesAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchProfiles.rejected, state => {
      state.loading = false
      state.error = true
    })
    builder.addCase(deleteProfile.fulfilled, (state, { payload: id }) => {
      state.loading = false
      profilesAdapter.removeOne(state, id)
    })
    builder.addCase(deleteProfile.pending, state => {
      state.loading = true
    })
    builder.addCase(deleteProfile.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export default profilesSlice.reducer

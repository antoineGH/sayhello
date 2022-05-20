import { Profile } from 'types/profile'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchProfiles } from './actions'

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
  }
})

export default profilesSlice.reducer

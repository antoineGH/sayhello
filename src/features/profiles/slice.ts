import { Profile } from 'types/profile'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

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
  extraReducers: {}
})

export default profilesSlice.reducer

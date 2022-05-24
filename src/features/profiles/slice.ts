import { Profile } from 'types/profile'
import {
  PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import {
  addProfile,
  deleteProfile,
  fetchProfiles,
  updateProfile
} from './actions'

export const profilesAdapter = createEntityAdapter({
  selectId: (profile: Profile) => profile.id
})

export const profilesSlice = createSlice({
  name: 'profiles',
  initialState: profilesAdapter.getInitialState({
    loading: false,
    error: false,
    activeID: 1
  }),
  reducers: {
    resetProfileError: state => {
      state.error = false
    },
    setActiveID: (state, { payload }: PayloadAction<number>) => {
      state.activeID = payload
    }
  },
  extraReducers: builder => {
    // fetchProfiles
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

    // addProfile
    builder.addCase(addProfile.fulfilled, (state, action) => {
      profilesAdapter.addOne(state, action.payload)
    })

    builder.addCase(addProfile.pending, state => {
      state.loading = true
    })
    builder.addCase(addProfile.rejected, state => {
      state.loading = false
      state.error = true
    })

    // updateProfile
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false
      profilesAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload.changes
      })
    })
    builder.addCase(updateProfile.pending, state => {
      state.loading = true
    })
    builder.addCase(updateProfile.rejected, state => {
      state.loading = false
      state.error = true
    })

    // deleteProfile
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

export const { resetProfileError, setActiveID } = profilesSlice.actions
export default profilesSlice.reducer

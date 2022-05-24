import { User } from 'types/profile'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { deleteUser, fetchUser, updateUser } from './actions'

export const userAdapter = createEntityAdapter({
  selectId: (user: User) => user.id
})

export const usersSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState({
    loading: false,
    error: false
  }),
  reducers: {
    resetUserError: state => {
      state.error = false
    }
  },
  extraReducers: builder => {
    // fetchUser
    builder.addCase(fetchUser.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false
      userAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchUser.rejected, state => {
      state.loading = false
      state.error = true
    })

    // updateUser
    builder.addCase(updateUser.pending, state => {
      state.loading = true
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false
      userAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload.changes
      })
    })
    builder.addCase(updateUser.rejected, state => {
      state.loading = false
      state.error = true
    })

    // deleteUser
    builder.addCase(deleteUser.pending, state => {
      state.loading = true
    })
    builder.addCase(deleteUser.fulfilled, (state, { payload: id }) => {
      state.loading = false
      userAdapter.removeOne(state, id)
    })
    builder.addCase(deleteUser.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export const { resetUserError } = usersSlice.actions
export default usersSlice.reducer

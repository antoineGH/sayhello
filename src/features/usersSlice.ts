import {
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { RootState } from 'store'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (): Promise<void> => {
    return fetch('http://localhost:4000/user/1').then(res => res.json())
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {},
  extraReducers: {}
})

export default usersSlice.reducer

import { Users } from 'types/profile'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk<Users, void>(
  'users/fetchUsers',
  async () => {
    try {
      const data = await fetch('http://localhost:4000/user')
      return await data.json()
    } catch (e) {
      throw new Error(`Fail to fetch users: ${e}`)
    }
  }
)

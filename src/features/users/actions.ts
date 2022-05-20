import { Users } from 'types/profile'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (): Promise<Users> => {
    try {
      const data = await fetch('http://localhost:4000/user')
      return await data.json()
    } catch (e) {
      throw new Error(`Fail to fetch users: ${e}`)
    }
  }
)

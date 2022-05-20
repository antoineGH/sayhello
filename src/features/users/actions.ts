import { Users } from 'types/profile'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_: void): Promise<Users> => {
    try {
      const data = await fetch('http://localhost:4000/user')
      return await data.json()
    } catch (e) {
      throw new Error(`Fail to fetch users: ${e}`)
    }
  }
)

export const fetchUserById = createAsyncThunk(
  'users/fetchUsers',
  async (_: void, userID): Promise<Users> => {
    try {
      const data = await fetch(`http://localhost:4000/user/${userID}`)
      return await data.json()
    } catch (e) {
      throw new Error(`Fail to fetch user: ${e}`)
    }
  }
)

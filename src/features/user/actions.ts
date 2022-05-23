import { Users } from 'types/profile'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk<Users, number>(
  'user/fetchUser',
  async userID => {
    try {
      const data = await fetch(`http://localhost:4000/user/${userID}`)
      const json = await data.json()
      return [json]
    } catch (e) {
      throw new Error(`Fail to fetch user: ${e}`)
    }
  }
)

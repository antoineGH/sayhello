import { User, UserAddIn, Users } from 'types/profile'
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

export const addUser = createAsyncThunk<User, UserAddIn>(
  'user/addUser',
  async user => {
    try {
      const response = await fetch('http://localhost:4000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      return await response.json()
    } catch (e) {
      throw new Error(`Fail to create user: ${e}`)
    }
  }
)

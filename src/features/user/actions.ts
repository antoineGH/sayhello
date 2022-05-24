import {
  User,
  UserAddIn,
  UserOut,
  UserUpdate,
  UserUpdateIn,
  Users
} from 'types/profile'
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

export const updateUser = createAsyncThunk<UserOut, UserUpdateIn>(
  'user/updateUser',
  async user => {
    const userUpdate: UserUpdate = {}
    user.first_name && (userUpdate.first_name = user.first_name)
    user.last_name && (userUpdate.last_name = user.last_name)
    user.password && (userUpdate.password = user.password)
    try {
      await fetch(`http://localhost:4000/user/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      return { id: user.id, changes: userUpdate }
    } catch (e) {
      throw new Error(`Fail to update user: ${e}`)
    }
  }
)

export const addUser = async (user: UserAddIn): Promise<User> => {
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

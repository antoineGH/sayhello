import { Profiles } from 'types/profile'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProfiles = createAsyncThunk<Profiles, number>(
  'profiles/fetchProfiles',
  async (userID: number) => {
    try {
      const data = await fetch(
        `http://localhost:4000/profile?user_id=${userID}`
      )
      return await data.json()
    } catch (e) {
      throw new Error(`Fail to fetch profiles: ${e}`)
    }
  }
)

export const deleteProfile = createAsyncThunk<number, number>(
  'profiles/deleteProfile',
  async (userID: number) => {
    try {
      await fetch(`http://localhost:4000/profile/${userID}`, {
        method: 'DELETE'
      })
      return userID
    } catch (e) {
      throw new Error(`Fail to delete profile: ${e}`)
    }
  }
)

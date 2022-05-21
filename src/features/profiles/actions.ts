import { ProfileOut, ProfilePut, Profiles } from 'types/profile'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProfiles = createAsyncThunk<Profiles, number>(
  'profiles/fetchProfiles',
  async userID => {
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

export const updateProfile = createAsyncThunk<ProfileOut, ProfilePut>(
  'profiles/updateProfile',
  async profile => {
    const user = {
      name: profile.name,
      avatar: profile.avatar,
      age: profile.age,
      user_id: profile.user_id
    }
    try {
      await fetch(`http://localhost:4000/profile/${profile.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      return { id: profile.id, changes: user }
    } catch (e) {
      throw new Error(`Fail to update profile: ${e}`)
    }
  }
)

export const deleteProfile = createAsyncThunk<number, number>(
  'profiles/deleteProfile',
  async profileID => {
    try {
      await fetch(`http://localhost:4000/profile/${profileID}`, {
        method: 'DELETE'
      })
      return profileID
    } catch (e) {
      throw new Error(`Fail to delete profile: ${e}`)
    }
  }
)

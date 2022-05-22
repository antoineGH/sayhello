import {
  ChangesPut,
  ProfileAdd,
  ProfileOut,
  ProfilePut,
  Profiles
} from 'types/profile'
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

export const addProfile = createAsyncThunk<ProfileAdd, ProfileAdd>(
  'profiles/addProfile',
  async profile => {
    console.log(profile)
    try {
      // await fetch('http://localhost:4000/profile', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(profile)
      // })
      return profile
    } catch (e) {
      throw new Error(`Fail to add profile: ${e}`)
    }
  }
)

export const updateProfile = createAsyncThunk<ProfileOut, ProfilePut>(
  'profiles/updateProfile',
  async profile => {
    const user: ChangesPut = {}
    profile.name && (user.name = profile.name)
    profile.avatar && (user.avatar = profile.avatar)
    profile.age && (user.age = profile.age)
    profile.user_id && (user.user_id = profile.user_id)

    try {
      await fetch(`http://localhost:4000/profile/${profile.id}`, {
        method: 'PATCH',
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

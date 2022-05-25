import { Goals } from 'types/goal'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGoals = createAsyncThunk<Goals, number>(
  'goals/fetchGoals',
  async profileID => {
    try {
      const data = await fetch(
        `http://localhost:4000/goal?profile_id=${profileID}`
      )
      return await data.json()
    } catch (e) {
      throw new Error(`Fail to fetch goal: ${e}`)
    }
  }
)

// export const updateGoal = createAsyncThunk()

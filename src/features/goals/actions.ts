import { GoalUpdateIn, GoalUpdateOut, Goals } from 'types/goal'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGoal = createAsyncThunk<Goals, number>(
  'goal/fetchGoal',
  async profileID => {
    try {
      const data = await fetch(
        `http://localhost:4000/goal?profile_id=${profileID}`
      )
      const json = await data.json()
      return json
    } catch (e) {
      throw new Error(`Fail to fetch goal: ${e}`)
    }
  }
)

export const updateGoal = createAsyncThunk<GoalUpdateOut, GoalUpdateIn>(
  'goal/updateGoal',
  async goal => {
    const goalUpdate = { days: goal.days }
    try {
      await fetch(`http://localhost:4000/goal/${goal.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(goal)
      })
      return { id: goal.id, changes: goalUpdate }
    } catch (e) {
      throw new Error(`Fail to update goal: ${e}`)
    }
  }
)

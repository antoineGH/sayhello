import {
  Result,
  ResultAddIn,
  ResultPutIn,
  ResultPutOut,
  Results
} from 'types/result'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchResults = createAsyncThunk<Results, number>(
  'results/fetchResults',
  async (profileID: number) => {
    try {
      const data = await fetch(
        `http://localhost:4000/result?profile_id=${profileID}`
      )
      const json = await data.json()
      return json
    } catch (e) {
      throw new Error(`Fail to fetch results: ${e}`)
    }
  }
)
export const fetchLastestResults = createAsyncThunk<Results, number>(
  'results/fetchLastestResults',
  async (profileID: number) => {
    try {
      const data = await fetch(
        `http://localhost:4000/result?profile_id=${profileID}&_sort=date_created&_order=desc&_limit=4`
      )
      const json = await data.json()
      return json
    } catch (e) {
      throw new Error(`Fail to fetch results: ${e}`)
    }
  }
)

export const addResult = createAsyncThunk<Result, ResultAddIn>(
  'results/addResult',
  async result => {
    try {
      const response = await fetch('http://localhost:4000/result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
      })
      return await response.json()
    } catch (e) {
      throw new Error(`Fail to add result: ${e}`)
    }
  }
)

export const updateResult = createAsyncThunk<ResultPutOut, ResultPutIn>(
  'results/updateResult',
  async result => {
    try {
      const data = await fetch(`http://localhost:4000/result/${result.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
      })
      const json = await data.json()
      return { id: result.id, changes: json }
    } catch (e) {
      throw new Error(`Fail to update result: ${e}`)
    }
  }
)

export const deleteResult = createAsyncThunk<number, number>(
  'results/deleteResult',
  async resultID => {
    try {
      await fetch(`http://localhost:4000/result/${resultID}`, {
        method: 'DELETE'
      })
      return resultID
    } catch (e) {
      throw new Error(`Fail to delete result: ${e}`)
    }
  }
)

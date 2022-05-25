import { configureStore } from '@reduxjs/toolkit'
import goalReducer from './features/goals/slice'
import profilesReducer from './features/profiles/slice'
import userReducer from './features/user/slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    profiles: profilesReducer,
    goal: goalReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

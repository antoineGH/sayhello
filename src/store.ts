import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from './features/courses/slice'
import goalReducer from './features/goals/slice'
import profilesReducer from './features/profiles/slice'
import userReducer from './features/user/slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    profiles: profilesReducer,
    goal: goalReducer,
    courses: coursesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

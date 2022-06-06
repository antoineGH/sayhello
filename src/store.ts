import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from './features/courses/slice'
import goalReducer from './features/goals/slice'
import profilesReducer from './features/profiles/slice'
import resultsReducer from './features/results/slice'
import userReducer from './features/user/slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    profiles: profilesReducer,
    goal: goalReducer,
    courses: coursesReducer,
    results: resultsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
import profilesReducer from './features/profiles/slice'
import usersReducer from './features/users/slice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    profiles: profilesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

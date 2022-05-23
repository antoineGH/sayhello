import { configureStore } from '@reduxjs/toolkit'
import profilesReducer from './features/profiles/slice'
import userReducer from './features/user/slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    profiles: profilesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

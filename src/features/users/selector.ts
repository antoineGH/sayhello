import { RootState } from 'store'
import { usersAdapter } from './slice'

export const usersSelectors = usersAdapter.getSelectors(
  (state: RootState) => state.users
)

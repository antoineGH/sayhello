export interface Goal {
  id: number
  days: number
}

export type Goals = Goal[]

export interface GoalUpdateIn {
  id: number
  days: number
}

interface GoalUpdate {
  days: number
}

export interface GoalUpdateOut {
  id: number
  changes: GoalUpdate
}

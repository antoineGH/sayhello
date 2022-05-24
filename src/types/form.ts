export interface formValueSuccessLogin {
  username: String
  password: String
  remember: Boolean
}

export interface formValueSuccessReset {
  password: string
  confirm: string
}

export interface formValueSuccessForgot {
  user: UserForgot
}

export interface UserForgot {
  email: string
}

export interface formValueSuccessRegister {
  email: string
  password: string
  first_name: string
  last_name: string
  date_created: string
}

export interface UserRegister {
  email: string
}

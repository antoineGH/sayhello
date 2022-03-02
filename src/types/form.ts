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
	user: UserRegister
	password: string
	confirm: string
}

export interface UserRegister {
	email: string
}

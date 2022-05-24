// TYPE PROFILE
export interface Profile {
  id: number
  name: string
  age: number
  avatar: string
  user_id: number
}

export type Profiles = Profile[]

export interface User {
  id: number
  email: string
  password: string
  first_name: string
  last_name: string
  date_created: string
}

export type Users = User[]

export interface UserUpdateIn {
  id: number
  first_name?: string
  last_name?: string
  password?: string
}

export interface UserUpdate {
  first_name?: string
  last_name?: string
  password?: string
}

export interface UserOut {
  id: number
  changes: UserUpdate
}

export interface UserAddIn {
  email: string
  password: string
  first_name: string
  last_name: string
  date_created: string
}

// THUNK PROFILE
export interface ProfilePutIn {
  id: number
  name?: string
  avatar?: string
  age?: number
  user_id?: number
}

export interface ProfileOut {
  id: number
  changes: ChangesPut
}

export interface ProfileAddIn {
  username: string
  avatar: string
  age: number
  user_id: number
}

export interface ChangesPut {
  name?: string
  avatar?: string
  age?: number
  user_id?: number
}

// PROPS PROFILE
export interface AccountPageProps {
  user?: User
}

export interface AccountInformationProps {
  user?: User
}

export interface EditAccountProps {
  user?: User
}

export interface EditAccountInformationProps {
  user?: User
}

export interface EditProfileProps {
  profiles: Profiles
  handleSwitchProfile: (profileID: number) => void
  isModal: boolean
}

export interface ModalEditProfileProps {
  profile: Profile
  visible: boolean
  confirmLoading: boolean
  handleOk: (
    profileID: number,
    username?: string,
    avatar?: string,
    age?: number,
    user_id?: number
  ) => void
  handleDeleteProfile: (profileID: number) => void
  handleCancel: () => void
}

export interface ModalSwitchProfileProps {
  visible: boolean
  handleSwitchProfile: (profileID: number) => void
  handleCancel: () => void
}

export interface TopBarComponentProps {
  visible: boolean
  setVisible: (visible: boolean) => void
  handleCancel: () => void
  handleSwitchProfile: (profileID: number) => void
  handleLogout: () => void
}

export interface TopMenuProps {
  visible: boolean
  setVisible: (visible: boolean) => void
  handleCancel: () => void
  handleSwitchProfile: (profileID: number) => void
  handleLogout: () => void
}

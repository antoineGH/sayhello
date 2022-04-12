import { Typography } from 'antd'
import ModalEditProfile from 'components/modals/modalEditProfile/ModalEditProfile'
import './style.css'

interface Profile {
	id: number
	name: string
	age: number
	user_id: number
}

type Profiles = Profile[]

interface User {
	id: number
	email: string
	password: string
	first_name: string
	last_name: string
	date_created: string
	profiles: Profiles
}

interface Props {
	user: User
}

const EditProfile = ({ user }: Props) => {
	const { Title } = Typography

	console.log(user)

	return (
		<div className='profile_main'>
			<Title level={3}>My Profiles</Title>
			<ModalEditProfile />
		</div>
	)
}
export default EditProfile

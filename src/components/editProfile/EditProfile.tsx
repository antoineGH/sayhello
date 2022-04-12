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

interface Props {
	profiles: Profiles
}

const EditProfile = ({ profiles }: Props) => {
	const { Title } = Typography

	console.log(profiles)

	return (
		<div className='profile_main'>
			<Title level={3}>My Profiles</Title>
			<ModalEditProfile />
		</div>
	)
}
export default EditProfile

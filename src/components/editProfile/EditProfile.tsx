import { Typography } from 'antd'
import ModalEditProfile from 'components/modals/modalEditProfile/ModalEditProfile'
import './style.css'

const EditProfile = () => {
	const { Title } = Typography
	return (
		<div className='profile_main'>
			<Title level={3}>My Profiles</Title>
			<ModalEditProfile />
		</div>
	)
}
export default EditProfile

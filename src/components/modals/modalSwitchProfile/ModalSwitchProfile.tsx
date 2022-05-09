import { Modal } from 'antd'
import EditProfile from 'components/editProfile/EditProfile'

interface Profile {
	id: number
	name: string
	avatar: string
	age: number
	user_id: number
}

type Profiles = Profile[]

interface Props {
	visible: boolean
	handleCancel: () => void
	profiles: Profiles
}

const ModalSwitchProfile = ({ visible, handleCancel, profiles }: Props) => {
	return (
		<Modal
			className='modal_switch_profile'
			title='Select Profile'
			visible={visible}
			onCancel={handleCancel}
			footer={null}>
			<EditProfile profiles={profiles} isModal={true} />
		</Modal>
	)
}
export default ModalSwitchProfile

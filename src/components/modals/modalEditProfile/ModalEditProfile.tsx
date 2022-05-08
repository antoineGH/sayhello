import { useEffect, useState } from 'react'
import { UploadOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Modal, Row, Upload } from 'antd'
import './style.css'

interface Profile {
	id: number
	name: string
	avatar: string
	age: number
	user_id: number
}

interface Props {
	profile: Profile
	visible: boolean
	confirmLoading: boolean
	handleOk: (username: String) => void
	handleCancel: () => void
}

const ModalEditProfile = ({ profile, visible, confirmLoading, handleOk, handleCancel }: Props) => {
	const [username, setUsername] = useState(profile.name)

	useEffect(() => {
		setUsername(profile.name)
	}, [profile])

	return (
		<Modal
			className='modal_edit_password'
			title='Edit Profile'
			visible={visible}
			onOk={() => handleOk(username)}
			okText='Update'
			confirmLoading={confirmLoading}
			onCancel={handleCancel}>
			<Row className='row_avatar'>
				<Col span={24} className='col_avatar'>
					<Avatar size={100} src={profile.avatar} icon={<UserOutlined />} />
				</Col>
				<Col span={24} className='col_upload'>
					<Upload>
						<Button type='link' icon={<UploadOutlined />}>
							Click to Upload
						</Button>
					</Upload>
				</Col>
			</Row>
			<form name='edit-account'>
				<label className='label_form'>Username:</label>
				<input
					className='edit_firstname'
					type='text'
					id='fname'
					name='fname'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</form>
		</Modal>
	)
}
export default ModalEditProfile

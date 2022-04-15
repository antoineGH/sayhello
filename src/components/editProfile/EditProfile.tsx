import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, message, Row, Typography } from 'antd'
import ModalEditProfile from 'components/modals/modalEditProfile/ModalEditProfile'
import { useState } from 'react'
import './style.css'

interface Profile {
	id: number
	name: string
	avatar: string
	age: number
	user_id: number
}

type Profiles = Profile[]

interface Props {
	profiles: Profiles
}

const EditProfile = ({ profiles }: Props) => {
	const [visible, setVisible] = useState(false)
	const [editProfile, setEditProfile] = useState(1)
	const [confirmLoading, setConfirmLoading] = useState(false)

	const { Title } = Typography

	const handleSwitchProfile = (profileID: number) => {
		console.log(`handleSwichProfile, profileID: ${profileID}`)
	}

	const handleEditProfile = (profileID: number) => {
		setEditProfile(profileID)
		setVisible(true)
	}

	const handleOk = (values: string) => {
		console.log('Success:', values)
		setConfirmLoading(true)
		setTimeout(() => {
			setVisible(false)
			setConfirmLoading(false)
		}, 2000)
	}

	const handleCancel = () => {
		setVisible(false)
	}

	return (
		<div className='profile_main'>
			<div className='profile_title'>
				<Title level={3}>My Profiles</Title>
			</div>
			<Row>
				{profiles.map((profile) => {
					return (
						<Col key={profile.id} className='col_square' style={{ marginRight: '1rem' }}>
							<Avatar
								src={profile.avatar}
								shape='square'
								size={64}
								icon={<UserOutlined />}
								style={{ marginTop: '.8rem' }}
							/>
							<Row>
								<Col>
									<Title level={4}>{profile.name}</Title>
								</Col>
							</Row>
							<Row>
								<Col>
									<Button onClick={() => handleSwitchProfile(profile.id)}>Switch</Button>
								</Col>
								<Col>
									<Button onClick={() => handleEditProfile(profile.id)}>Edit</Button>
								</Col>
							</Row>
						</Col>
					)
				})}
			</Row>
			<ModalEditProfile
				profiles={profiles}
				visible={visible}
				handleOk={handleOk}
				confirmLoading={confirmLoading}
				handleCancel={handleCancel}
				editProfile={editProfile}
			/>
		</div>
	)
}
export default EditProfile

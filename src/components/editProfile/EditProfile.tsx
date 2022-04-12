import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Row, Typography } from 'antd'
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
	const { Title } = Typography

	console.log(profiles)

	const handleSwitchProfile = (profileID: number) => {
		console.log(`handleSwichProfile, profileID: ${profileID}`)
	}

	const handleEditProfile = (profileID: number) => {
		console.log(`handleEditProfile, profileID: ${profileID}`)
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
		</div>
	)
}
export default EditProfile

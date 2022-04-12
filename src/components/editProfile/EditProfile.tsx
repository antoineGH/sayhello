import { UserOutlined } from '@ant-design/icons'
import { Avatar, Col, Row, Typography } from 'antd'
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
								style={{ marginTop: '.2rem', marginBottom: '.4rem' }}
							/>
							<Title level={4}>{profile.name}</Title>
						</Col>
					)
				})}
			</Row>
		</div>
	)
}
export default EditProfile

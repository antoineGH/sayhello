import { SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Card, Col, Row, Typography } from 'antd'
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
	const { Title } = Typography
	const [visible, setVisible] = useState(false)

	const handleEditProfile = (profileID: number) => {
		console.log(`handleEditProfile: ${profileID}`)
	}

	const handleSwitchProfile = (profileID: number) => {
		console.log(`handleSwitchProfile: ${profileID}`)
	}

	return (
		<div className='account_main'>
			<Row>
				<Col>
					<Title level={3}>My Profiles</Title>
				</Col>
				<Col>
					<Button type='link' onClick={() => setVisible(!visible)}>
						{visible ? 'Back' : 'Edit'}
					</Button>
				</Col>
			</Row>
			<Card
				bordered={false}
				style={{ marginBottom: '1rem', height: '400px' }}
				className='card_account_information'
				title={visible ? 'Edit Profile' : 'Select Profile'}>
				<Row className='row_card_account'>
					{profiles.map((profile) => {
						return (
							<Col
								className='profile_col'
								key={profile.id}
								span={5}
								onClick={
									visible
										? () => handleEditProfile(profile.id)
										: () => handleSwitchProfile(profile.id)
								}>
								<Row>
									<Avatar size={100} src={profile.avatar} icon={<UserOutlined />} />
								</Row>
								<Row style={{ marginTop: '.5rem' }}>
									<Col span={24}>
										<Title level={5}>{profile.name}</Title>
									</Col>
								</Row>
								<Row className='row_last_col'>
									<Col className='col_cog'>
										{visible ? (
											<SettingOutlined style={{ fontSize: '1.1rem', color: '#3a10e5' }} />
										) : (
											' '
										)}
									</Col>
								</Row>
							</Col>
						)
					})}
				</Row>
			</Card>
		</div>
	)
}
export default EditProfile

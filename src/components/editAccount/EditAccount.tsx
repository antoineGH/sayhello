import { Button, Card, Col, Row, Typography } from 'antd'
import { useState } from 'react'
import AccountInformation from './AccountInformation'
import EditAccountInformation from './EditAccountInformation'
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

const EditAccount = ({ user }: Props) => {
	const { Title } = Typography
	const [visible, setVisible] = useState(false)

	return (
		<div className='account_main'>
			<Row>
				<Col>
					<Title level={3}>My Account</Title>
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
				title='My Information'>
				{visible ? <EditAccountInformation user={user} /> : <AccountInformation user={user} />}
			</Card>
		</div>
	)
}
export default EditAccount

import { Button, Col, Row, Typography } from 'antd'
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

	console.log(user)

	return (
		<div className='account_main'>
			<Row>
				<Col>
					<Title level={3}>My Account</Title>
				</Col>
				<Col>
					<Button type='link' onClick={() => setVisible(!visible)}>
						Edit
					</Button>
				</Col>
			</Row>
			{visible ? <EditAccountInformation /> : <AccountInformation user={user} />}
		</div>
	)
}
export default EditAccount

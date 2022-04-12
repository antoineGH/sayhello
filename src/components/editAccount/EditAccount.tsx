import { Typography } from 'antd'
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

	return (
		<div className='account_main'>
			<div className='edit_account'>
				<Title level={3}>My Account</Title>
			</div>
		</div>
	)
}
export default EditAccount

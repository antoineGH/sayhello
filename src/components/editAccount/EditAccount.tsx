import { Typography } from 'antd'
import './style.css'

const EditAccount = () => {
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

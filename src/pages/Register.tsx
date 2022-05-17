import { useNavigate } from 'react-router'
import RegisterForm from 'forms/registerForm/RegisterForm'
import useTitle from 'hooks/useTitle'
import { Col, PageHeader, Row } from 'antd'

const Register = () => {
	const navigate = useNavigate()
	useTitle('Register')
	return (
		<div className='register_main'>
			<Row>
				<Col>
					<PageHeader
						className='site-page-header'
						onBack={() => navigate('/login')}
						title='Register'
						subTitle='Create a new account'
					/>
				</Col>
			</Row>
			<Row style={{ width: '100%' }}>
				<RegisterForm />
			</Row>
		</div>
	)
}

export default Register

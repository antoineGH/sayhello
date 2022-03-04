import { Button, Col, PageHeader, Row } from 'antd'
import RegisterForm from 'forms/registerForm/RegisterForm'
import useTitle from 'hooks/useTitle'
import { useNavigate } from 'react-router'

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
			<Row>
				<Col>
					<RegisterForm />
				</Col>
			</Row>
			<Row>
				<Col className='login_justify'>Already have an account?</Col>
				<Col>
					<Button onClick={() => navigate('/login')} type='link'>
						Login
					</Button>
				</Col>
			</Row>
		</div>
	)
}

export default Register

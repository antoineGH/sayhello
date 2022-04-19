import { PageHeader, Row, Col, Button } from 'antd'
import LoginForm from 'forms/loginForm/LoginForm'
import useTitle from 'hooks/useTitle'
import { useNavigate } from 'react-router'

const Login = () => {
	useTitle('Login')
	const navigate = useNavigate()
	return (
		<div className='login_main'>
			<Row>
				<Col>
					<PageHeader className='site-page-header' title='Login' subTitle='Log into your account' />
				</Col>
			</Row>
			<Row style={{ width: '100%' }}>
				<LoginForm />
			</Row>
			<Row>
				<Col className='login_justify'>No account?</Col>
				<Col>
					<Button onClick={() => navigate('/register')} type='link'>
						Register
					</Button>
				</Col>
			</Row>
			<Row>
				<Col className='login_justify'>Forgot your password?</Col>
				<Col>
					<Button onClick={() => navigate('/forgot')} type='link'>
						Reset
					</Button>
				</Col>
			</Row>
		</div>
	)
}

export default Login

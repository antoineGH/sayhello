import { PageHeader, Row, Col, Button } from 'antd'
import LoginForm from 'forms/loginForm/LoginForm'
import useTitle from 'hooks/useTitle'
import { useNavigate } from 'react-router'

const Login = () => {
	useTitle('Login')
	const navigate = useNavigate()
	return (
		<>
			<Row>
				<Col>
					<PageHeader className='site-page-header' title='Login' subTitle='Log into your account' />
				</Col>
			</Row>
			<Row>
				<LoginForm />
			</Row>
			<Row>
				<Col>
					<p>No account?</p>
				</Col>
				<Col>
					<Button onClick={() => navigate('/register')} type='link'>
						Register
					</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>Forgot your password?</p>
				</Col>
				<Col>
					<Button onClick={() => navigate('/forgot')} type='link'>
						Reset
					</Button>
				</Col>
			</Row>
		</>
	)
}

export default Login

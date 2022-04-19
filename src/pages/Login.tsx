import { PageHeader, Row, Col } from 'antd'
import LoginForm from 'forms/loginForm/LoginForm'
import useTitle from 'hooks/useTitle'

const Login = () => {
	useTitle('Login')

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
		</div>
	)
}

export default Login

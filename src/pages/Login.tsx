import { PageHeader } from 'antd'
import useTitle from 'hooks/useTitle'

const Login = () => {
	useTitle('Login')
	return (
		<>
			<PageHeader
				className='site-page-header'
				onBack={() => null}
				title='Login'
				subTitle='Log into your account'
			/>
		</>
	)
}

export default Login

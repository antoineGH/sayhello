import { PageHeader } from 'antd'
import useTitle from 'hooks/useTitle'

const Register = () => {
	useTitle('Register')
	return (
		<>
			<PageHeader
				className='site-page-header'
				onBack={() => null}
				title='Register'
				subTitle='Create a new account'
			/>
		</>
	)
}

export default Register

import { PageHeader } from 'antd'
import useTitle from 'hooks/useTitle'
import { useNavigate } from 'react-router'

const Register = () => {
	const navigate = useNavigate()
	useTitle('Register')
	return (
		<>
			<PageHeader
				className='site-page-header'
				onBack={() => navigate('/login')}
				title='Register'
				subTitle='Create a new account'
			/>
		</>
	)
}

export default Register

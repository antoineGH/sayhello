import { PageHeader } from 'antd'
import useTitle from 'hooks/useTitle'
import { useNavigate } from 'react-router'

const Forgot = () => {
	const navigate = useNavigate()
	useTitle('Forgot')
	return (
		<>
			<PageHeader
				className='site-page-header'
				onBack={() => navigate('/login')}
				title='Forgot Password'
				subTitle='Reset your password'
			/>
		</>
	)
}

export default Forgot

import { Col, PageHeader, Row } from 'antd'
import ForgotForm from 'forms/forgotForm/ForgotForm'
import useTitle from 'hooks/useTitle'
import { useNavigate } from 'react-router'

const Forgot = () => {
	const navigate = useNavigate()
	useTitle('Forgot')
	return (
		<>
			<Row>
				<Col>
					<PageHeader
						className='site-page-header'
						onBack={() => navigate('/login')}
						title='Forgot Password'
						subTitle='Reset your password'
					/>
				</Col>
			</Row>
			<Row>
				<Col>
					<ForgotForm />
				</Col>
			</Row>
		</>
	)
}

export default Forgot

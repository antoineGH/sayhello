import { Col, PageHeader, Row } from 'antd'
import ResetForm from 'forms/resetForm/ResetForm'
import useTitle from 'hooks/useTitle'
import { useNavigate } from 'react-router'

const Reset = () => {
	const navigate = useNavigate()
	useTitle('Reset')
	return (
		<>
			<Row>
				<Col>
					<PageHeader
						className='site-page-header'
						onBack={() => navigate('/forgot')}
						title='Reset Password'
						subTitle='Reset your password'
					/>
				</Col>
			</Row>
			<Row>
				<Col>
					<ResetForm />
				</Col>
			</Row>
		</>
	)
}

export default Reset

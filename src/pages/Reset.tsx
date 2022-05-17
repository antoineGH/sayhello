import { useNavigate } from 'react-router'
import ResetForm from 'forms/resetForm/ResetForm'
import useTitle from 'hooks/useTitle'
import { Col, PageHeader, Row } from 'antd'

const Reset = () => {
	const navigate = useNavigate()
	useTitle('Reset')
	return (
		<div className='reset_main'>
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
			<Row style={{ width: '100%' }}>
				<ResetForm />
			</Row>
		</div>
	)
}

export default Reset

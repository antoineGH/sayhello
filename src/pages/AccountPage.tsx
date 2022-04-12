import { Col, PageHeader, Row } from 'antd'
import EditAccount from 'components/editAccount/EditAccount'
import EditProfile from 'components/editProfile/EditProfile'
import useTitle from 'hooks/useTitle'

const AccountPage = () => {
	useTitle('Account')
	return (
		<>
			<Row>
				<Col>
					<PageHeader className='site-page-header' title='Account Information' subTitle='My information' />
				</Col>
			</Row>
			<Row>
				<Col span={12}>
					<EditAccount />
				</Col>
				<Col span={12}>
					<EditProfile />
				</Col>
			</Row>
		</>
	)
}
export default AccountPage

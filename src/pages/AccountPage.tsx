import { Col, PageHeader, Row } from 'antd'
import EditAccount from 'components/editAccount/EditAccount'
import EditProfile from 'components/editProfile/EditProfile'
import useTitle from 'hooks/useTitle'

const AccountPage = () => {
	useTitle('Account')
	const user = {
		id: 1,
		email: 'antoine.ratat@gmail.com',
		password: 'test',
		first_name: 'Antoine',
		last_name: 'Ratat',
		date_created: '2022-02-27T18:45:43.511Z',
		profiles: [
			{
				id: 1,
				name: 'Antoine',
				avatar: 'http://www.gravatar.com/avatar/73543542128f5a067ffc34305eefe48a',
				age: 31,
				user_id: 1,
			},
			{
				id: 2,
				name: 'Catherine',
				avatar: 'http://www.gravatar.com/avatar/73543542128f5a067ffc34305eefe48a',
				age: 54,
				user_id: 1,
			},
			{
				id: 3,
				name: 'Bastien',
				avatar: 'http://www.gravatar.com/avatar/73543542128f5a067ffc34305eefe48a',
				age: 26,
				user_id: 2,
			},
			{
				id: 4,
				name: 'Thierry',
				avatar: 'http://www.gravatar.com/avatar/73543542128f5a067ffc34305eefe48a',
				age: 51,
				user_id: 2,
			},
		],
	}

	return (
		<>
			<Row>
				<Col>
					<PageHeader className='site-page-header' title='Account Information' subTitle='My information' />
				</Col>
			</Row>
			<Row>
				<Col span={8}>
					<EditAccount user={user} />
				</Col>
				<Col span={16}>
					<EditProfile profiles={user.profiles} />
				</Col>
			</Row>
		</>
	)
}
export default AccountPage

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
				avatar: 'https://fr.gravatar.com/userimage/120424681/f0988edb94af4c3b8731c42b2ebae37c.png',
				age: 31,
				user_id: 1,
			},
			{
				id: 2,
				name: 'Carrie',
				avatar: 'https://secure.gravatar.com/userimage/120424681/b77218678307e7fb0e7afce0df04b52c?size=400',
				age: 54,
				user_id: 1,
			},
			{
				id: 3,
				name: 'Bastien',
				avatar: 'https://fr.gravatar.com/userimage/120424681/f0988edb94af4c3b8731c42b2ebae37c.png',
				age: 26,
				user_id: 2,
			},
			{
				id: 4,
				name: 'Thierry',
				avatar: 'https://fr.gravatar.com/userimage/120424681/f0988edb94af4c3b8731c42b2ebae37c.png',
				age: 51,
				user_id: 2,
			},
		],
	}

	return (
		<>
			<Row>
				<Col>
					<PageHeader className='site-page-header' title='Account Information' />
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

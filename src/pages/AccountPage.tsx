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
				// name: 'Carrie',
				name: 'John',
				// avatar: 'https://secure.gravatar.com/userimage/120424681/b77218678307e7fb0e7afce0df04b52c?size=400',
				avatar: 'https://fr.gravatar.com/userimage/120424681/f0988edb94af4c3b8731c42b2ebae37c.png',
				age: 54,
				user_id: 1,
			},
			{
				id: 3,
				name: 'Bastien',
				avatar: 'https://www.gravatar.com/userimage/120424681/1c7e2f0e022ac36a2835ad9b0f2bd09c?size=120',
				age: 26,
				user_id: 2,
			},
			{
				id: 4,
				name: 'Max',
				avatar: 'https://www.gravatar.com/userimage/120424681/5e05bb39aae93745809bf0a293fdd945?size=120',
				age: 51,
				user_id: 2,
			},
		],
	}

	const handleSwitchProfile = (profileID: number) => {
		console.log(`handleSwitchProfile ProfileID: ${profileID}`)
	}

	return (
		<>
			<Row>
				<Col>
					<PageHeader className='site-page-header' title='Account Information' />
				</Col>
			</Row>
			<Row>
				<Col xs={24} md={8}>
					<EditAccount user={user} />
				</Col>
				<Col xs={24} md={16}>
					<EditProfile profiles={user.profiles} isModal={false} handleSwitchProfile={handleSwitchProfile} />
				</Col>
			</Row>
		</>
	)
}
export default AccountPage

import { useState } from 'react'
import { useNavigate } from 'react-router'
import SearchBar from './Search'
import MenuItem from './MenuItem'
import ModalSwitchProfile from 'components/modals/modalSwitchProfile/ModalSwitchProfile'
import { ReactComponent as ReactLogo } from './logo_sayHello.svg'
import { Avatar, Button, Col, Dropdown, Menu, Row } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const TopMenu = () => {
	const navigate = useNavigate()
	const [visible, setVisible] = useState(false)

	const handleCancel = (): void => {
		setVisible(false)
	}

	const handleSwitchProfile = (profileID: number): void => {
		console.log(`handleSwitchProfile ProfileID: ${profileID}`)
		setVisible(false)
	}

	const handleLogout = (): void => {
		console.log('handleLogout')
	}

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

	const menu = (
		<Menu>
			<Menu.Item key='1'>
				<Button type='text' onClick={() => setVisible(true)}>
					Switch Profil
				</Button>
			</Menu.Item>
			<Menu.Item key='2'>
				<Button onClick={() => navigate('/auth/account')} type='text'>
					Edit Account
				</Button>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key='3'>
				<Button onClick={handleLogout} type='text'>
					Logout
				</Button>
			</Menu.Item>
		</Menu>
	)

	return (
		<>
			<Row className='header_row'>
				<Col md={4} lg={3} xl={2} onClick={() => navigate('/auth/home')} className='col_logo'>
					<ReactLogo />
				</Col>
				<Col md={10} lg={8} xl={6}>
					<MenuItem />
				</Col>
				<Col className='col_search' md={8} lg={{ offset: 7, span: 5 }} xl={{ offset: 10, span: 5 }}>
					<SearchBar />
				</Col>
				<Col className='col_avatar' md={2} lg={1}>
					<Dropdown overlay={menu} placement='bottomRight' arrow>
						<Avatar
							src='https://fr.gravatar.com/userimage/120424681/f0988edb94af4c3b8731c42b2ebae37c.png'
							icon={<UserOutlined />}
							size={40}
						/>
					</Dropdown>
				</Col>
			</Row>
			<ModalSwitchProfile
				visible={visible}
				handleSwitchProfile={handleSwitchProfile}
				handleCancel={handleCancel}
				profiles={user.profiles}
			/>
		</>
	)
}

export default TopMenu

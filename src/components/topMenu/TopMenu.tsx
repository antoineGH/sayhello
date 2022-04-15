import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Dropdown, Menu, Row, Typography } from 'antd'
import { useNavigate } from 'react-router'

import MenuItem from './MenuItem'
import SearchBar from './Search'

const TopMenu = () => {
	const { Title } = Typography
	const navigate = useNavigate()

	const menu = (
		<Menu>
			<Menu.Item key='1'>
				<Button type='text'>Switch Profil</Button>
			</Menu.Item>
			<Menu.Item key='2'>
				<Button onClick={() => navigate('/auth/account')} type='text'>
					Edit Account
				</Button>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key='3'>
				<Button type='text'>Logout</Button>
			</Menu.Item>
		</Menu>
	)

	return (
		<>
			<Row>
				<Col span={2} onClick={() => navigate('/auth/home')} className='col_logo'>
					<Title level={3} className='title_logo'>
						sayHello
					</Title>
				</Col>
				<Col span={8}>
					<MenuItem />
				</Col>
				<Col className='col_search' span={4} offset={9}>
					<SearchBar />
				</Col>
				<Col className='col_avatar' span={1}>
					<Dropdown overlay={menu} placement='bottomRight' arrow>
						<Avatar
							src='http://www.gravatar.com/avatar/73543542128f5a067ffc34305eefe48a'
							icon={<UserOutlined />}
							size={36}
						/>
					</Dropdown>
				</Col>
			</Row>
		</>
	)
}

export default TopMenu

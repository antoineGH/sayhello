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
			<Menu.Item>
				<Button type='text'>Switch Profil</Button>
			</Menu.Item>
			<Menu.Item>
				<Button onClick={() => navigate('/auth/account')} type='text'>
					Edit Account
				</Button>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item>
				<Button type='text'>Logout</Button>
			</Menu.Item>
		</Menu>
	)

	return (
		<>
			<Row>
				<Col className='col_logo' span={1}>
					<Title level={3} className='title_logo'>
						sayHello
					</Title>
				</Col>
				<Col span={5}>
					<MenuItem />
				</Col>
				<Col className='col_search' span={2} offset={15}>
					<SearchBar />
				</Col>
				<Col className='col_avatar' span={1}>
					<Dropdown overlay={menu} placement='bottomRight' arrow>
						<Avatar icon={<UserOutlined />} />
					</Dropdown>
				</Col>
			</Row>
		</>
	)
}

export default TopMenu

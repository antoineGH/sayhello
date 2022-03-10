import { UserOutlined } from '@ant-design/icons'
import { Avatar, Col, Dropdown, Menu, Row, Typography } from 'antd'

import MenuItem from './MenuItem'
import SearchBar from './Search'

const TopMenu = () => {
	const { Title } = Typography

	const menu = (
		<Menu>
			<Menu.Item>
				<a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
					Switch Profile
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
					Edit Account
				</a>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item>
				<a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
					Logout
				</a>
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

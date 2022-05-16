import { useState } from 'react'
import { useNavigate } from 'react-router'
import { menu } from 'components/topMenu/menu'
import CustomLink from 'components/topMenu/CustomLink'
import { Avatar, Button, Col, Divider, Drawer, Input, Menu, Row } from 'antd'
import {
	CloseOutlined,
	LogoutOutlined,
	MenuOutlined,
	SearchOutlined,
	SettingOutlined,
	UserOutlined,
	UserSwitchOutlined,
} from '@ant-design/icons'
import { ReactComponent as ReactLogo } from '../topMenu/logo_sayHello.svg'
import { ReactComponent as ReactLogoWhiteBG } from './logo-sayHello_whiteBG.svg'
import './style.css'
import SubMenu from 'antd/lib/menu/SubMenu'

const TopBarComponent = () => {
	const [visible, setVisible] = useState(false)
	const [searchContent, setSearchContent] = useState('')
	const navigate = useNavigate()

	const handleClickLogo = (): void => {
		visible && setVisible(false)
		navigate('/auth/home')
	}

	const handleSwitchAccount = (): void => {
		console.log('handleSwitchAccount')
	}

	const handleEditAccount = (): void => {
		setVisible(false)
		navigate('/auth/account')
	}

	const handleLogout = (): void => {
		setVisible(false)
		console.log('handleLogout')
	}

	const handleSearch = (): void => {
		if (searchContent) {
			console.log(`handleSearch ${searchContent}`)
			setSearchContent('')
		}
		return
	}

	return (
		<nav className='navbar'>
			<Row className='row_topbar'>
				<Col span={14} onClick={handleClickLogo} className='col_logo_top'>
					<ReactLogo />
				</Col>
				<Col span={4} offset={6}>
					<Button
						className='button_menu'
						type='link'
						icon={<MenuOutlined className='icon_menu' />}
						onClick={() => setVisible(true)}
					/>
				</Col>
			</Row>
			<Drawer
				className='container-drawer drawer_menu'
				placement='top'
				onClose={() => setVisible(false)}
				visible={visible}>
				<Row className='row_drawer_top'>
					<Col onClick={handleClickLogo} span={14} className='col_logo_top'>
						<ReactLogoWhiteBG />
					</Col>
					<Col span={4} offset={6}>
						<Button onClick={() => setVisible(false)} type='link'>
							<CloseOutlined />
						</Button>
					</Col>
				</Row>

				<Row className='topmenu_items row_menu_mobile'>
					<Col span={24}>
						<Input
							className='search_menu_mobile'
							size='large'
							placeholder='Search our catalog'
							prefix={<SearchOutlined />}
							onChange={(e) => setSearchContent(e.target.value)}
							onPressEnter={handleSearch}
							value={searchContent}
						/>
					</Col>
					{menu.map((element) => {
						return (
							<Col key={element.name} span={24}>
								<CustomLink onClick={() => setVisible(false)} key={element.name} to={element.path}>
									<Row>
										{element.icon}
										{element.name}
									</Row>
								</CustomLink>
							</Col>
						)
					})}
					<Divider style={{ margin: '0rem' }} />
					<Col span={24}>
						<Menu
							className='menu_user_mobile'
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							mode='inline'>
							<SubMenu
								key='sub1'
								icon={
									<Avatar
										src='https://fr.gravatar.com/userimage/120424681/f0988edb94af4c3b8731c42b2ebae37c.png'
										icon={<UserOutlined />}
										size={24}
									/>
								}
								title='Antoine Ratat'>
								<Menu.Item key='1' onClick={handleSwitchAccount} icon={<UserSwitchOutlined />}>
									Switch Profile
								</Menu.Item>
								<Menu.Item key='2' onClick={handleEditAccount} icon={<SettingOutlined />}>
									Edit Account
								</Menu.Item>
								<Menu.Item key='3' onClick={handleLogout} icon={<LogoutOutlined />}>
									Logout
								</Menu.Item>
							</SubMenu>
						</Menu>
					</Col>
				</Row>
			</Drawer>
		</nav>
	)
}
export default TopBarComponent

import { useState } from 'react'
import { useNavigate } from 'react-router'
import { menu } from 'components/topMenu/menu'
import CustomLink from 'components/topMenu/CustomLink'
import { Avatar, Button, Col, Drawer, Dropdown, Menu, Row } from 'antd'
import { CloseOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons'
import { ReactComponent as ReactLogo } from '../topMenu/logo_sayHello.svg'
import { ReactComponent as ReactLogoWhiteBG } from './logo-sayHello_whiteBG.svg'
import './style.css'

const TopBarComponent = () => {
	const navigate = useNavigate()
	const handleLogout = (): void => {
		console.log('handleLogout')
	}

	const subMenu = (
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

	const [visible, setVisible] = useState(true)
	return (
		<nav className='navbar'>
			<Row className='row_topbar'>
				<Col span={14} className='col_logo_top'>
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
					<Col span={14} className='col_logo_top'>
						<ReactLogoWhiteBG />
					</Col>
					<Col span={4} offset={6}>
						<Button onClick={() => setVisible(false)} type='link'>
							<CloseOutlined />
						</Button>
					</Col>
				</Row>

				<Row className='topmenu_items row_menu_mobile'>
					{menu.map((element) => {
						return (
							<Col key={element.name} span={24}>
								<CustomLink onClick={() => setVisible(false)} key={element.name} to={element.path}>
									<Row>
										<Col span={2} className='menu_mobile_icon'>
											{element.icon}
										</Col>
										<Col span={22} className='menu_mobile_text'>
											{element.name}
										</Col>
									</Row>
								</CustomLink>
							</Col>
						)
					})}
					<Col span={24}>
						<Row>
							<Col span={2} className='menu_mobile_icon'>
								<Dropdown overlay={subMenu} placement='bottomRight' arrow>
									<Avatar
										src='https://fr.gravatar.com/userimage/120424681/f0988edb94af4c3b8731c42b2ebae37c.png'
										icon={<UserOutlined />}
										size={24}
									/>
								</Dropdown>
							</Col>
							<Col span={22} className='menu_mobile_text font_menu_item'>
								Antoine Ratat
							</Col>
						</Row>
					</Col>
				</Row>
			</Drawer>
		</nav>
	)
}
export default TopBarComponent

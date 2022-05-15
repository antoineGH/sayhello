import { useState } from 'react'
import { Button, Col, Drawer, Row } from 'antd'
import { CloseOutlined, MenuOutlined, TrophyOutlined } from '@ant-design/icons'
import { ReactComponent as ReactLogo } from '../topMenu/logo_sayHello.svg'
import { ReactComponent as ReactLogoWhiteBG } from './logo-sayHello_whiteBG.svg'
import { menu } from 'components/topMenu/menu'
import './style.css'
import CustomLink from 'components/topMenu/CustomLink'

const TopBarComponent = () => {
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
				</Row>
			</Drawer>
		</nav>
	)
}
export default TopBarComponent

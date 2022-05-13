import { useState } from 'react'
import { Button, Col, Drawer, Row } from 'antd'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { ReactComponent as ReactLogo } from '../topMenu/logo_sayHello.svg'
import { ReactComponent as ReactLogoWhiteBG } from './logo-sayHello_whiteBG.svg'
import './style.css'

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
			</Drawer>
		</nav>
	)
}
export default TopBarComponent

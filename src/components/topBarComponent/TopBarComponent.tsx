import { useState } from 'react'
import { Button, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import './style.css'

const TopBarComponent = () => {
	const [visible, setVisible] = useState(false)
	return (
		<nav className='navbar'>
			<Button
				className='button_menu'
				type='link'
				icon={<MenuOutlined className='icon_menu' />}
				onClick={() => setVisible(true)}
			/>
			<Drawer className='container-drawer' placement='right' onClose={() => setVisible(false)} visible={visible}>
				{/* <Row className="row-user-sider">
              <Col className="col-user-avatar">
                {renderUserAvatar(logged, user)}
              </Col>
              <Col className="col-user-user">
                {renderUserInput(logged, hasErrorUser, user, true)}
              </Col>
            </Row>
            <Search logged={logged} />
            {logged ? menuAuth() : menuUnAuth()} */}
			</Drawer>
		</nav>
	)
}
export default TopBarComponent

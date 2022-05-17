import { useNavigate } from 'react-router'
import ModalSwitchProfile from 'components/modals/modalSwitchProfile/ModalSwitchProfile'
import { Avatar, Button, Col, Dropdown, Menu, Row } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import MenuItem from './MenuItem'
import SearchBar from './Search'
import { ReactComponent as ReactLogo } from './logo_sayHello.svg'

interface Profile {
  id: number
  name: string
  avatar: string
  age: number
  user_id: number
}

type Profiles = Profile[]

interface Props {
  visible: boolean
  setVisible: (visible: boolean) => void
  profiles: Profiles
  handleCancel: () => void
  handleSwitchProfile: (profileID: number) => void
  handleLogout: () => void
}

const TopMenu = ({
  visible,
  setVisible,
  profiles,
  handleCancel,
  handleSwitchProfile,
  handleLogout
}: Props) => {
  const navigate = useNavigate()

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Button type="text" onClick={() => setVisible(true)}>
          Switch Profil
        </Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button onClick={() => navigate('/auth/account')} type="text">
          Edit Account
        </Button>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Button onClick={handleLogout} type="text">
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <Row className="header_row">
        <Col
          md={4}
          lg={3}
          xl={2}
          onClick={() => navigate('/auth/home')}
          className="col_logo"
        >
          <ReactLogo />
        </Col>
        <Col md={10} lg={8} xl={6}>
          <MenuItem />
        </Col>
        <Col
          className="col_search"
          md={8}
          lg={{ offset: 6, span: 5 }}
          xl={{ offset: 10, span: 5 }}
        >
          <SearchBar />
        </Col>
        <Col className="col_avatar" md={2} lg={2} xl={1}>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Avatar
              src="https://fr.gravatar.com/userimage/120424681/f0988edb94af4c3b8731c42b2ebae37c.png"
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
        profiles={profiles}
      />
    </>
  )
}

export default TopMenu

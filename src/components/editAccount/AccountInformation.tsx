import { Avatar, Col, Row, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'

interface Profile {
  id: number
  name: string
  age: number
  user_id: number
}

type Profiles = Profile[]

interface User {
  id: number
  email: string
  password: string
  first_name: string
  last_name: string
  date_created: string
  profiles: Profiles
}

interface Props {
  user: User
}

const AccountInformation = ({ user }: Props) => {
  const { Title } = Typography

  const formatTimeStamp = (date_created: String): String => {
    const date_update = date_created.replace('T', ' ').slice(0, 19)
    return date_update
  }

  return (
    <div className="container_account_info">
      <Row>
        <Avatar
          size={100}
          src="https://fr.gravatar.com/userimage/120424681/f0988edb94af4c3b8731c42b2ebae37c.png"
          icon={<UserOutlined />}
        />
      </Row>
      <Row>
        <Col span={24} style={{ marginTop: '1rem' }}>
          <Title
            level={4}
            style={{ marginBottom: '.2rem' }}
          >{`${user.first_name} ${user.last_name}`}</Title>
        </Col>
        <Col span={24} className="ant-statistic-email">
          {user.email}
        </Col>
        <Col span={24} className="ant-statistic-email">
          {formatTimeStamp(user.date_created)}
        </Col>
      </Row>
    </div>
  )
}
export default AccountInformation

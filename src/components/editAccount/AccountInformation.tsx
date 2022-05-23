import { useAppSelector } from 'hooks/hooks'
import { profilesSelectors } from 'features/profiles/selectors'
import { AccountInformationProps } from 'types/profile'
import { Avatar, Col, Row, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const AccountInformation = ({ user }: AccountInformationProps) => {
  const { Title } = Typography
  const profiles = useAppSelector(profilesSelectors.selectAll)

  const formatTimeStamp = (date_created?: String): String => {
    if (date_created) {
      const date_update = date_created.replace('T', ' ').slice(0, 19)
      return date_update
    }
    return ''
  }

  return (
    <div className="container_account_info">
      <Row>
        <Avatar size={100} src={profiles[0].avatar} icon={<UserOutlined />} />
      </Row>
      <Row>
        <Col span={24} style={{ marginTop: '1rem' }}>
          <Title
            level={4}
            style={{ marginBottom: '.2rem' }}
          >{`${user?.first_name} ${user?.last_name}`}</Title>
        </Col>
        <Col span={24} className="ant-statistic-email">
          {user?.email}
        </Col>
        <Col span={24} className="ant-statistic-email">
          {formatTimeStamp(user?.date_created)}
        </Col>
      </Row>
    </div>
  )
}
export default AccountInformation

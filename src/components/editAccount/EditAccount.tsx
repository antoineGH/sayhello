import { useState } from 'react'
import { EditAccountProps } from 'types/profile'
import { Button, Card, Col, Row, Typography } from 'antd'
import AccountInformation from './AccountInformation'
import EditAccountInformation from './EditAccountInformation'
import './style.css'

const EditAccount = ({ user }: EditAccountProps) => {
  const { Title } = Typography
  const [visible, setVisible] = useState(false)

  return (
    <div className="account_main">
      <Row>
        <Col>
          <Title level={3}>My Account</Title>
        </Col>
        <Col>
          <Button type="link" onClick={() => setVisible(!visible)}>
            {visible ? 'Back' : 'Edit'}
          </Button>
        </Col>
      </Row>
      <Card
        bordered={false}
        style={{ marginBottom: '1rem', height: '400px' }}
        className="card_account_information"
        title="My Information"
      >
        {visible ? (
          <EditAccountInformation user={user} />
        ) : (
          <AccountInformation user={user} />
        )}
      </Card>
    </div>
  )
}
export default EditAccount

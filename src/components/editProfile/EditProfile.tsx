import { useState } from 'react'
import ModalEditProfile from 'components/modals/modalEditProfile/ModalEditProfile'
import { EditProfileProps } from 'types/profile'
import { Avatar, Button, Card, Col, Row, Typography } from 'antd'
import {
  CaretRightOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import './style.css'

const EditProfile = ({
  profiles,
  handleSwitchProfile,
  isModal
}: EditProfileProps) => {
  const { Title } = Typography
  const [visible, setVisible] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [profile, setProfile] = useState(profiles[0])

  const handleEditProfile = (profileID: number) => {
    const profile = profiles.filter(profile => profile.id === profileID)
    setProfile(profile[0])
    setVisibleEdit(true)
  }

  const handleOk = (username: String) => {
    setConfirmLoading(true)
    setTimeout(() => {
      setConfirmLoading(false)
      setVisibleEdit(false)
    }, 2000)
    console.log(`handleOk ${username}`)
  }

  const handleCancel = () => {
    setVisibleEdit(false)
  }

  return (
    <div
      className={isModal ? 'account_main edit_profile_modal' : 'account_main'}
    >
      <Row>
        <Col>
          <Title level={3}>My Profiles</Title>
        </Col>
        <Col>
          <Button type="link" onClick={() => setVisible(!visible)}>
            {visible ? 'Back' : 'Edit'}
          </Button>
        </Col>
      </Row>
      <Card
        bordered={false}
        className="card_account_information"
        title={visible ? 'Edit Profile' : 'Select Profile'}
      >
        <Row className="row_card_account" gutter={[16, 16]}>
          {profiles.map(profile => {
            return (
              <Col
                className={visible ? 'profile_col_visible' : 'profile_col'}
                key={profile.id}
                xs={11}
                lg={5}
                onClick={
                  visible
                    ? () => handleEditProfile(profile.id)
                    : () => handleSwitchProfile(profile.id)
                }
              >
                <Row style={{ marginTop: '.5rem', padding: '1rem' }}>
                  <Avatar
                    size={100}
                    src={profile.avatar}
                    icon={<UserOutlined />}
                  />
                  {visible && (
                    <SettingOutlined
                      style={{ color: '#3a10e5', fontSize: '1.5rem' }}
                      className="overlay"
                    />
                  )}
                </Row>
                <Row className={visible ? 'title_white' : ''}>
                  <Col span={24} style={{ marginTop: '0.3rem' }}>
                    <Title level={5}>{profile.name}</Title>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {profile.id === 1 ? (
                      <CaretRightOutlined
                        rotate={-90}
                        style={{ fontSize: '2rem', color: 'rgb(59 16 229)' }}
                      />
                    ) : (
                      <p className="empty_text"></p>
                    )}
                  </Col>
                </Row>
              </Col>
            )
          })}
        </Row>
      </Card>
      <ModalEditProfile
        profile={profile}
        visible={visibleEdit}
        handleCancel={handleCancel}
        handleOk={handleOk}
        confirmLoading={confirmLoading}
      />
    </div>
  )
}
export default EditProfile

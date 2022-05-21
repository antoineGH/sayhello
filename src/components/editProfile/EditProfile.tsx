import { useState } from 'react'
import ModalEditProfile from 'components/modals/modalEditProfile/ModalEditProfile'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { deleteProfile, updateProfile } from 'features/profiles/actions'
import { profileIsLoading } from 'features/profiles/selectors'
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
  const [profile, setProfile] = useState(profiles[0])
  const dispatch = useAppDispatch()
  const loading = useAppSelector(profileIsLoading)

  const handleEditProfile = (profileID: number) => {
    const profile = profiles.filter(profile => profile.id === profileID)
    setProfile(profile[0])
    setVisibleEdit(true)
  }

  const handleOk = (
    profileID: number,
    username: string,
    avatar: string,
    age: number,
    user_id: number
  ) => {
    dispatch(
      updateProfile({
        id: profileID,
        name: username,
        avatar: avatar,
        age: age,
        user_id: user_id
      })
    ).then(() => {
      setVisibleEdit(false)
    })
  }

  const handleCancel = () => {
    setVisibleEdit(false)
  }

  const handleDeleteProfile = (profileID: number) => {
    console.log(`handleDeleteProfile ${profileID}`)
    dispatch(deleteProfile(profileID)).then(data => console.log(data.payload))
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
        handleDeleteProfile={handleDeleteProfile}
        confirmLoading={loading}
      />
    </div>
  )
}
export default EditProfile

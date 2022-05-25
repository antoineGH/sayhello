import { useState } from 'react'
import ModalAddProfile from 'components/modals/modalAddProfile/ModalAddProfile'
import ModalEditProfile from 'components/modals/modalEditProfile/ModalEditProfile'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import {
  addProfile,
  deleteProfile,
  updateProfile
} from 'features/profiles/actions'
import { profileActive, profileIsLoading } from 'features/profiles/selectors'
import { userSelector } from 'features/user/selector'
import { EditProfileProps, ProfileAddIn, ProfilePutIn } from 'types/profile'
import { Avatar, Button, Card, Col, Row, Typography } from 'antd'
import {
  CaretRightOutlined,
  PlusSquareOutlined,
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
  const [visibleAdd, setVisibleAdd] = useState(false)
  const [profile, setProfile] = useState(profiles[0])
  const dispatch = useAppDispatch()
  const loading = useAppSelector(profileIsLoading)
  const userID = Number(useAppSelector(userSelector.selectIds)[0])
  const activeID = useAppSelector(profileActive)

  const handleEditProfile = (profileID: number) => {
    const profile = profiles.filter(profile => profile.id === profileID)
    setProfile(profile[0])
    setVisibleEdit(true)
  }

  const handleOk = (
    profileID: number,
    username?: string,
    avatar?: string,
    age?: number,
    user_id?: number
  ) => {
    const updateArg: ProfilePutIn = {
      id: profileID
    }
    username !== profile.name && (updateArg.name = username)
    avatar !== profile.avatar && (updateArg.avatar = avatar)
    age !== profile.age && (updateArg.age = age)
    user_id !== profile.user_id && (updateArg.user_id = user_id)

    dispatch(updateProfile(updateArg)).then(() => {
      setVisibleEdit(false)
    })
  }

  const handleCancel = () => {
    setVisibleEdit(false)
  }

  const handleCancelAdd = () => {
    setVisibleAdd(false)
  }

  const handleAddProfile = (name: string, age: number) => {
    const user: ProfileAddIn = {
      name: name,
      avatar:
        'https://www.gravatar.com/userimage/120424681/1c7e2f0e022ac36a2835ad9b0f2bd09c?size=120',
      age: age,
      user_id: userID
    }
    dispatch(addProfile(user))
  }

  const handleDeleteProfile = (profileID: number) => {
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
        <Row className="row_card_account">
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
                    {profile.id === activeID ? (
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
          {profiles.length <= 3 && visible && (
            <Col
              onClick={() => setVisibleAdd(true)}
              className={visible ? 'profile_col_visible' : 'profile_col'}
              key={profile.id}
              xs={11}
              lg={5}
            >
              <Row>
                <Col>
                  <PlusSquareOutlined
                    style={{ fontSize: '2rem', color: 'rgb(59 16 229)' }}
                  />
                </Col>
              </Row>
              <Row className={visible ? 'title_white' : ''}>
                <Col span={24} style={{ marginTop: '0.3rem' }}>
                  <Title level={5}>Add Profile</Title>
                </Col>
              </Row>
            </Col>
          )}
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
      <ModalAddProfile
        visible={visibleAdd}
        confirmLoading={loading}
        handleCancelAdd={handleCancelAdd}
        handleAddProfile={handleAddProfile}
      />
    </div>
  )
}
export default EditProfile

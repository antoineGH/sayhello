import { useEffect, useState } from 'react'
import { ModalEditProfileProps } from 'types/profile'
import { Avatar, Button, Col, Modal, Row, Upload } from 'antd'
import { UploadOutlined, UserOutlined } from '@ant-design/icons'
import './style.css'

const ModalEditProfile = ({
  profile,
  visible,
  confirmLoading,
  handleOk,
  handleCancel,
  handleDeleteProfile
}: ModalEditProfileProps) => {
  const [username, setUsername] = useState(profile.name)

  useEffect(() => {
    setUsername(profile.name)
  }, [profile])

  return (
    <Modal
      className="modal_edit_password"
      title="Edit Profile"
      visible={visible}
      onOk={() =>
        handleOk(
          profile.id,
          username,
          'https://newavatar.com',
          profile.age,
          profile.user_id
        )
      }
      okText="Update"
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Row className="row_avatar">
        <Col span={24} className="col_avatar">
          <Avatar size={100} src={profile.avatar} icon={<UserOutlined />} />
        </Col>
        <Col span={24} className="col_upload">
          <Upload>
            <Button type="link" icon={<UploadOutlined />}>
              Click to Upload
            </Button>
          </Upload>
        </Col>
      </Row>
      <form name="edit-account">
        <label className="label_form">Username:</label>
        <input
          className="edit_firstname"
          type="text"
          id="fname"
          name="fname"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </form>
      <Row>
        <Col span={24}>
          <Button type="link" onClick={() => handleDeleteProfile(profile.id)}>
            Delete Profile
          </Button>
        </Col>
      </Row>
    </Modal>
  )
}
export default ModalEditProfile

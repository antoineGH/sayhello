import { useState } from 'react'
import { ModalAddProfileProps } from 'types/profile'
import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Upload
} from 'antd'
import { UploadOutlined, UserOutlined } from '@ant-design/icons'
import './style.css'

const ModalAddProfile = ({
  visible,
  confirmLoading,
  handleCancelAdd,
  handleAddProfile
}: ModalAddProfileProps) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  const handleAdd = () => {
    if (name.length >= 1 && name.length <= 20) {
      if (age >= 1 && age <= 99) {
        handleAddProfile(name, age)
      }
    }
    return
  }
  return (
    <Modal
      className="modal_edit_password"
      title="Add Profile"
      visible={visible}
      onOk={handleAdd}
      okText="Add"
      confirmLoading={confirmLoading}
      onCancel={handleCancelAdd}
    >
      <Row>
        <Col span={24}>
          <Form name="login" autoComplete="off">
            <Form.Item
              label="Name"
              className="login_username_row"
              name="name"
              rules={[
                { required: true, message: 'Please input your name' },
                { min: 2, message: 'Name too short' },
                { max: 20, message: 'Name too long' }
              ]}
            >
              <Input
                className="login_username"
                onChange={e => setName(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Age"
              className="login_username_row"
              name="age"
              rules={[
                { required: true, message: 'Please input your age' },
                {
                  type: 'number',
                  min: 1,
                  max: 99,
                  message: 'Age should be between 0-99'
                }
              ]}
            >
              <InputNumber
                className="login_username input-number"
                onChange={e => setAge(Number(e))}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row className="row_avatar" style={{ marginTop: '1rem' }}>
        <Col span={24} className="col_avatar">
          <Avatar size={100} icon={<UserOutlined />} />
        </Col>
        <Col span={24} className="col_upload">
          <Upload>
            <Button type="link" icon={<UploadOutlined />}>
              Click to Upload
            </Button>
          </Upload>
        </Col>
      </Row>
    </Modal>
  )
}
export default ModalAddProfile

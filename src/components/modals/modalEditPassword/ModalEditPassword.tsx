import { useState } from 'react'
import { ModalEditPasswordProps } from 'types/user'
import { Form, Input, Modal } from 'antd'

const ModalEditPassword = ({
  visible,
  handleCancel,
  confirmLoading,
  handleOk
}: ModalEditPasswordProps) => {
  const [passwordUpdate, setPasswordUpdate] = useState('')

  const handleUpdate = () => {
    if (passwordUpdate) {
      handleOk(passwordUpdate)
    }
    setPasswordUpdate('')
  }

  return (
    <Modal
      className="modal_edit_password"
      title="Edit Password"
      visible={visible}
      okText="Update"
      onOk={handleUpdate}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form name="edit-password" autoComplete="off">
        <Form.Item
          className="edit_password_row"
          name="password"
          label="Password"
          rules={[
            {
              required: false,
              message: 'Please input your password'
            }
          ]}
          hasFeedback
        >
          <Input.Password
            value={passwordUpdate}
            onChange={e => setPasswordUpdate(e.target.value)}
            className="edit_password"
          />
        </Form.Item>

        <Form.Item
          className="edit_password_row"
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: false,
              message: 'Please confirm your password'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('Passwords do not match'))
              }
            })
          ]}
        >
          <Input.Password className="edit_password" />
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default ModalEditPassword

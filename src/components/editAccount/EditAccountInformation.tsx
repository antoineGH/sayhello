import { useState } from 'react'
import ModalEditPassword from 'components/modals/modalEditPassword/ModalEditPassword'
import { formValueSuccessLogin } from 'types/form'
import { EditAccountInformationProps } from 'types/profile'
import { Button, Col, Form, Input, Row } from 'antd'

const EditAccountInformation = ({ user }: EditAccountInformationProps) => {
  const [editPasswordVisible, setEditPasswordVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const onFinish = (values: formValueSuccessLogin) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const handleCancel = (): void => {
    setEditPasswordVisible(false)
  }

  const handleOk = (values: string) => {
    console.log('Success:', values)
    setConfirmLoading(true)
    setTimeout(() => {
      setEditPasswordVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  return (
    <>
      <Row>
        <Form
          name="edit-account"
          initialValues={{
            firstname: user.first_name,
            lastname: user.last_name
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            className="edit_firstname_row"
            name="firstname"
            rules={[
              { required: false, message: 'Please input your first name' }
            ]}
          >
            <Input className="edit_firstname" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            className="edit_lastname_row"
            name="lastname"
            rules={[
              { required: false, message: 'Please input your last name' }
            ]}
          >
            <Input className="edit_lastname" />
          </Form.Item>

          <Row className="update_password_row">
            <Col>
              <Button
                onClick={() => setEditPasswordVisible(true)}
                type="link"
                className="link_heavy special_link"
              >
                Update my password
              </Button>
            </Col>
          </Row>
          <Form.Item style={{ marginTop: '1.5rem' }}>
            <Button htmlType="submit" className="btn_login">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Row>
      <ModalEditPassword
        visible={editPasswordVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        confirmLoading={confirmLoading}
      />
    </>
  )
}
export default EditAccountInformation

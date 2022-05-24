import { useState } from 'react'
import { useNavigate } from 'react-router'
import ModalEditPassword from 'components/modals/modalEditPassword/ModalEditPassword'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { deleteUser, updateUser } from 'features/user/actions'
import { userIsLoading, userSelector } from 'features/user/selector'
import { formValueSuccessAccount } from 'types/form'
import { EditAccountInformationProps, UserUpdateIn } from 'types/profile'
import { Button, Col, Form, Input, Row } from 'antd'

const EditAccountInformation = ({ user }: EditAccountInformationProps) => {
  const [editPasswordVisible, setEditPasswordVisible] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  let userID = 0
  userID = Number(useAppSelector(userSelector.selectIds)[0])
  const loading = useAppSelector(userIsLoading)

  const onFinish = (values: formValueSuccessAccount) => {
    if (!values.first_name || !values.last_name) return
    const userUpdate: UserUpdateIn = {
      id: userID,
      first_name: values.first_name,
      last_name: values.last_name
    }
    dispatch(updateUser(userUpdate))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const handleCancel = (): void => {
    setEditPasswordVisible(false)
  }

  const handleDeleteUser = () => {
    console.log('handleDeleteUser')
    dispatch(deleteUser(userID))
    navigate('/')
    // handleLogout
  }

  const handleOk = (password: string) => {
    console.log('Success:', password)
    if (!password) return
    const userUpdate: UserUpdateIn = {
      id: userID,
      password: password
    }
    dispatch(updateUser(userUpdate))
    setEditPasswordVisible(false)
  }

  return (
    <>
      <Row>
        <Form
          name="edit-account"
          initialValues={{
            first_name: user?.first_name,
            last_name: user?.last_name
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            className="edit_firstname_row"
            name="first_name"
            rules={[
              { required: false, message: 'Please input your first name' }
            ]}
          >
            <Input className="edit_firstname" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            className="edit_lastname_row"
            name="last_name"
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
      <Row className="update_password_row">
        <Col>
          <Button onClick={handleDeleteUser} type="link" className="btn-delete">
            Delete my account
          </Button>
        </Col>
      </Row>
      <ModalEditPassword
        visible={editPasswordVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        confirmLoading={loading}
      />
    </>
  )
}
export default EditAccountInformation

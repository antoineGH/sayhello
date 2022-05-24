import { useNavigate } from 'react-router'
import { useAppDispatch } from 'hooks/hooks'
import { addUser } from 'features/user/actions'
import { formValueSuccessRegister } from 'types/form'
import { UserAddIn } from 'types/profile'
import { Button, Col, Form, Input, Row } from 'antd'

const RegisterForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onFinish = (values: formValueSuccessRegister) => {
    const user: UserAddIn = {
      email: values.email,
      password: values.password,
      first_name: values.first_name,
      last_name: values.last_name,
      date_created: new Date().toISOString()
    }
    dispatch(addUser(user))
  }

  const testOnlyRegister = () => {
    const user: UserAddIn = {
      email: 'test@test.test',
      password: 'test',
      first_name: 'FirstTest',
      last_name: 'LastTest',
      date_created: new Date().toISOString()
    }

    dispatch(addUser(user))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="register"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        className="register_email_row"
        name={['first_name']}
        label="First Name"
        rules={[
          {
            required: true,

            message: 'Please input your first name'
          },
          {
            min: 2,
            message: 'First name too short'
          },
          {
            max: 20,
            message: 'First name too long'
          }
        ]}
      >
        <Input className="register_email" />
      </Form.Item>

      <Form.Item
        className="register_email_row"
        name={['last_name']}
        label="Last Name"
        rules={[
          {
            required: true,
            message: 'Please input your last name'
          },
          {
            min: 2,
            message: 'Last name too short'
          },
          {
            max: 20,
            message: 'Last name too long'
          }
        ]}
      >
        <Input className="register_email" />
      </Form.Item>

      <Form.Item
        className="register_email_row"
        name={['email']}
        label="Email"
        rules={[{ type: 'email', message: 'Email not valid' }]}
      >
        <Input className="register_email" />
      </Form.Item>

      <Form.Item
        className="register_password_row"
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password'
          },
          {
            min: 6,
            message: 'Password too short'
          },
          {
            max: 20,
            message: 'Password too long'
          }
        ]}
        hasFeedback
      >
        <Input.Password className="register_password" />
      </Form.Item>

      <Form.Item
        className="register_password_confirm_row"
        name="confirm"
        label="Confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password'
          },
          {
            min: 6,
            message: 'Password too short'
          },
          {
            max: 20,
            message: 'Password too long'
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
        <Input.Password className="register_password_confirm" />
      </Form.Item>

      <Form.Item style={{ marginTop: '2.5rem' }}>
        <Button className="btn_register" type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>

      <Button type="primary" onClick={testOnlyRegister}>
        REGISTER TEST
      </Button>

      <Row>
        <Col
          className="no_account"
          style={{ alignItems: 'center', marginTop: '.35rem' }}
        >
          Already have an account?
        </Col>
        <Col>
          <Button
            onClick={() => navigate('/login')}
            type="link"
            className="link_heavy"
            style={{ marginLeft: '1rem' }}
          >
            Login
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
export default RegisterForm

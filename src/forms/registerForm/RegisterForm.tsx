import { useNavigate } from 'react-router'
import { formValueSuccessRegister } from 'types/form'
import { Button, Col, Form, Input, Row } from 'antd'

const RegisterForm = () => {
  const navigate = useNavigate()
  const onFinish = (values: formValueSuccessRegister) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: '${label} is required!',
    types: {
      // eslint-disable-next-line no-template-curly-in-string
      email: '${label} is not a valid email!'
    }
  }

  return (
    <Form
      name="register"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
      autoComplete="off"
    >
      <Form.Item
        className="register_email_row"
        name={['user', 'first_name']}
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
        name={['user', 'last_name']}
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
        name={['user', 'email']}
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

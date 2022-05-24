import { useNavigate } from 'react-router'
import { formValueSuccessLogin } from 'types/form'
import { Button, Col, Form, Input, Row } from 'antd'

const LoginForm = () => {
  const navigate = useNavigate()

  const onFinish = (values: formValueSuccessLogin) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        className="login_username_row"
        name="email"
        rules={[{ required: true, message: 'Please input your email' }]}
      >
        <Input className="login_username" />
      </Form.Item>

      <Form.Item
        label="Password"
        className="login_password_row"
        name="password"
        rules={[{ required: true, message: 'Please input your password' }]}
      >
        <Input.Password className="login_password" />
      </Form.Item>

      <Row>
        <Col>
          <Button
            onClick={() => navigate('/forgot')}
            type="link"
            className="link_heavy"
          >
            I forgot my password
          </Button>
        </Col>
      </Row>

      <Form.Item style={{ marginTop: '1.5rem' }}>
        <Button htmlType="submit" className="btn_login">
          Login
        </Button>
      </Form.Item>
      <Row>
        <Col
          style={{ alignItems: 'center', marginTop: '.35rem' }}
          className="no_account"
        >
          No account?
        </Col>
        <Col>
          <Button
            onClick={() => navigate('/register')}
            type="link"
            className="link_heavy"
            style={{ marginLeft: '1rem' }}
          >
            Register
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default LoginForm

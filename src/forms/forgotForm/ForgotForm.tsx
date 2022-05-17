import { useNavigate } from 'react-router'
import { formValueSuccessForgot } from 'types/form'
import { Button, Form, Input } from 'antd'

const ForgotForm = () => {
  const navigate = useNavigate()

  const onFinish = (values: formValueSuccessForgot) => {
    console.log('Success:', values)
    navigate('/reset')
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
      name="forgot"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
      autoComplete="off"
    >
      <Form.Item
        className="forgot_email_row"
        name={['user', 'email']}
        label="Email"
        rules={[{ required: true, type: 'email', message: 'Email not valid' }]}
      >
        <Input className="forgot_email" />
      </Form.Item>
      <Form.Item style={{ marginTop: '1.5rem' }}>
        <Button className="btn_forgot" type="primary" htmlType="submit">
          Reset
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ForgotForm

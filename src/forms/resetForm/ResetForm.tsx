import { formValueSuccessReset } from 'types/form'
import { Button, Form, Input } from 'antd'

const ResetForm = () => {
  const onFinish = (values: formValueSuccessReset) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="reset"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        className="reset_password_row"
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password'
          }
        ]}
        hasFeedback
      >
        <Input.Password className="reset_password" />
      </Form.Item>
      <Form.Item
        className="reset_password_row"
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
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
        <Input.Password className="reset_password" />
      </Form.Item>
      <Form.Item style={{ marginTop: '1.5rem' }}>
        <Button className="btn_reset" type="primary" htmlType="submit">
          Set Password
        </Button>
      </Form.Item>
    </Form>
  )
}
export default ResetForm

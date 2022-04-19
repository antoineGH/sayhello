import { Form, Input, Button, Checkbox } from 'antd'
import { formValueSuccessLogin } from 'types/form'

const LoginForm = () => {
	const onFinish = (values: formValueSuccessLogin) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Form
			name='login'
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'>
			<Form.Item
				label='Username'
				className='login_username_row'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}>
				<Input className='login_username' />
			</Form.Item>

			<Form.Item
				label='Password'
				className='login_password_row'
				name='password'
				rules={[{ required: true, message: 'Please input your password!' }]}>
				<Input.Password className='login_password' />
			</Form.Item>

			<Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button htmlType='submit'>Login</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm

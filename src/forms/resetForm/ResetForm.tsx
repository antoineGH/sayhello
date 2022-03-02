import { Button, Form, Input } from 'antd'
import { formValueSuccessReset } from 'types/form'

const ResetForm = () => {
	const onFinish = (values: formValueSuccessReset) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Form
			name='basic'
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'>
			<Form.Item
				name='password'
				label='Password'
				rules={[
					{
						required: true,
						message: 'Please input your password!',
					},
				]}
				hasFeedback>
				<Input.Password />
			</Form.Item>
			<Form.Item
				name='confirm'
				label='Confirm Password'
				dependencies={['password']}
				hasFeedback
				rules={[
					{
						required: true,
						message: 'Please confirm your password!',
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve()
							}
							return Promise.reject(new Error('The two passwords that you entered do not match!'))
						},
					}),
				]}>
				<Input.Password />
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type='primary' htmlType='submit'>
					Set Password
				</Button>
			</Form.Item>
		</Form>
	)
}
export default ResetForm

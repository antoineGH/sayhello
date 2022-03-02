import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router'
import { formValueSuccessForgot } from 'types/form'

const ForgotForm = () => {
	const navigate = useNavigate()

	const onFinish = (values: formValueSuccessForgot) => {
		console.log('Success:', values)
		if (!values.user.email) {
			return
		}
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
			email: '${label} is not a valid email!',
		},
	}

	return (
		<Form
			name='basic'
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			validateMessages={validateMessages}
			autoComplete='off'>
			<Form.Item name={['user', 'email']} label='Email' rules={[{ type: 'email' }]}>
				<Input />
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type='primary' htmlType='submit'>
					Reset
				</Button>
			</Form.Item>
		</Form>
	)
}

export default ForgotForm

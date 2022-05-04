import { Form, Input, Modal } from 'antd'
import { useState } from 'react'
import { formValueSuccessLogin } from 'types/form'

interface Props {
	visible: boolean
	handleCancel: () => void
	confirmLoading: boolean
	handleOk: (password: string) => void
}

const ModalEditPassword = ({ visible, handleCancel, confirmLoading, handleOk }: Props) => {
	const [passwordUpdate, setPasswordUpdate] = useState('')

	const onFinish = (values: formValueSuccessLogin) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Modal
			className='modal_edit_password'
			title='Edit Password'
			visible={visible}
			okText='Update'
			onOk={() => handleOk(passwordUpdate)}
			confirmLoading={confirmLoading}
			onCancel={handleCancel}>
			<Form name='edit-password' onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
				<Form.Item
					className='edit_password_row'
					name='password'
					label='Password'
					rules={[
						{
							required: false,
							message: 'Please input your password',
						},
					]}
					hasFeedback>
					<Input.Password className='edit_password' />
				</Form.Item>

				<Form.Item
					className='edit_password_row'
					name='confirm'
					label='Confirm Password'
					dependencies={['password']}
					hasFeedback
					rules={[
						{
							required: false,
							message: 'Please confirm your password',
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve()
								}
								return Promise.reject(new Error('Passwords do not match'))
							},
						}),
					]}>
					<Input.Password className='edit_password' />
				</Form.Item>
			</Form>
		</Modal>
	)
}
export default ModalEditPassword

import { Button, Card, Col, Form, Input, Row } from 'antd'
import ModalEditPassword from 'components/modals/modalEditPassword/ModalEditPassword'
import { useState } from 'react'
import { formValueSuccessLogin } from 'types/form'

interface Profile {
	id: number
	name: string
	age: number
	user_id: number
}

type Profiles = Profile[]

interface User {
	id: number
	email: string
	password: string
	first_name: string
	last_name: string
	date_created: string
	profiles: Profiles
}

interface Props {
	user: User
}

const EditAccountInformation = ({ user }: Props) => {
	const [editPasswordVisible, setEditPasswordVisible] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)

	const onFinish = (values: formValueSuccessLogin) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	const handleCancel = (): void => {
		setEditPasswordVisible(false)
	}

	const handleOk = (values: string) => {
		console.log('Success:', values)
		setConfirmLoading(true)
		setTimeout(() => {
			setEditPasswordVisible(false)
			setConfirmLoading(false)
		}, 2000)
	}

	return (
		<Card key={user.id} bordered={false} style={{ marginBottom: '1rem' }} className='card_account_information'>
			<Row>
				<Col span={24}>
					<div className='ant-statistic-title'>My Information</div>
				</Col>
			</Row>
			<Row></Row>
			<Row>
				<Form
					name='edit-account'
					initialValues={{ firstname: user.first_name, lastname: user.last_name }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete='off'>
					<Form.Item
						label='First Name'
						className='edit_firstname_row'
						name='firstname'
						rules={[{ required: false, message: 'Please input your first name' }]}>
						<Input className='edit_firstname' />
					</Form.Item>

					<Form.Item
						label='Last Name'
						className='edit_lastname_row'
						name='lastname'
						rules={[{ required: false, message: 'Please input your last name' }]}>
						<Input className='edit_lastname' />
					</Form.Item>

					<Row className='update_password_row'>
						<Col>
							<Button
								onClick={() => setEditPasswordVisible(true)}
								type='link'
								className='link_heavy special_link'>
								Update my password
							</Button>
						</Col>
					</Row>
					<Form.Item style={{ marginTop: '1.5rem' }}>
						<Button htmlType='submit' className='btn_login'>
							Update
						</Button>
					</Form.Item>
				</Form>
			</Row>
			<ModalEditPassword
				visible={editPasswordVisible}
				handleCancel={handleCancel}
				handleOk={handleOk}
				confirmLoading={confirmLoading}
			/>
		</Card>
	)
}
export default EditAccountInformation

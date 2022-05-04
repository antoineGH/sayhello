import { useEffect, useState } from 'react'
import { Avatar, Button, Form, Input, Modal, Typography, Upload } from 'antd'
import { UploadOutlined, UserOutlined } from '@ant-design/icons'

interface Profile {
	id: number
	name: string
	avatar: string
	age: number
	user_id: number
}

type Profiles = Profile[]

interface Props {
	profiles: Profiles
	visible: boolean
	handleOk: (values: string) => void
	confirmLoading: boolean
	handleCancel: () => void
	editProfile: number
}

const ModalEditProfile = ({ profiles, visible, handleOk, confirmLoading, handleCancel, editProfile }: Props) => {
	const [fieldForm, setFieldForm] = useState(profiles[editProfile - 1].name)
	const [profileUpdate, setProfileUpdate] = useState(profiles[editProfile - 1].name)
	const { Title } = Typography

	// useEffect(() => {
	// 	console.log(profileUpdate)
	// }, [profileUpdate])

	const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
		setProfileUpdate(e.currentTarget.value)
	}

	return (
		<Modal
			title='Edit Profile'
			visible={visible}
			onOk={() => handleOk(profileUpdate)}
			confirmLoading={confirmLoading}
			onCancel={handleCancel}>
			<Avatar
				src={profiles[editProfile - 1].avatar}
				shape='square'
				size={64}
				icon={<UserOutlined />}
				style={{ marginTop: '.8rem' }}
			/>
			<Title level={4}>{profiles[editProfile - 1].name}</Title>
			<Upload name='file' action='https://www.mocky.io/v2/5cc8019d300000980a055e76'>
				<Button icon={<UploadOutlined />}>Upload Avatar</Button>
			</Upload>
			<Form name='basic' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} autoComplete='off'>
				<Form.Item
					label='Profile'
					name='profile'
					rules={[
						{ required: true, message: 'Please input your profile name' },
						{
							pattern: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/,
							message: "Profile name shouldn't contain spaces or numbers",
						},
						{
							min: 3,
							message: 'Profile name should contain at least 3 characters',
						},
						{ max: 25, message: "Profile name shouldn't exceed 25 characters" },
					]}>
					<Input id='input' name='input' onChange={handleOnChange} />
				</Form.Item>
			</Form>
		</Modal>
	)
}
export default ModalEditProfile

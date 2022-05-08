import { useEffect, useRef, useState } from 'react'
import { UploadOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Form, Input, Modal, Row, Upload } from 'antd'
import './style.css'
import { formValueSuccessLogin } from 'types/form'
import React from 'react'

interface Profile {
	id: number
	name: string
	avatar: string
	age: number
	user_id: number
}

interface Props {
	profile: Profile
	visible: boolean
	confirmLoading: boolean
	handleOk: (username: String) => void
	handleCancel: () => void
}

const ModalEditProfile = ({ profile, visible, confirmLoading, handleOk, handleCancel }: Props) => {
	const [username, setUsername] = useState('')
	const inputEl = useRef(null)
	useEffect(() => {
		console.log('trigger useEffect profile changed')
		setUsername(profile.name)
		// valueRef.current.value = profile.name
		inputEl.current.focus()
	}, [profile.name])

	// BUG:  SOLUTION UPDATE FORM, RESET WITH USEEFFECT

	return (
		<Modal
			className='modal_edit_password'
			title='Edit Profile'
			visible={visible}
			onOk={() => handleOk(username)}
			okText='Update'
			confirmLoading={confirmLoading}
			onCancel={handleCancel}>
			<Row className='row_avatar'>
				<Col span={24} className='col_avatar'>
					<Avatar size={100} src={profile.avatar} icon={<UserOutlined />} />
				</Col>
				<Col span={24} className='col_upload'>
					<Upload>
						<Button type='link' icon={<UploadOutlined />}>
							Click to Upload
						</Button>
					</Upload>
				</Col>
			</Row>
			<Form name='edit-account' initialValues={{ username: profile.name }} autoComplete='off'>
				<Form.Item
					label='Username'
					className='edit_firstname_row'
					name='username'
					rules={[{ required: true, message: 'Please input your username' }]}>
					<Input
						ref={inputEl}
						className='edit_firstname'
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					/>
				</Form.Item>
			</Form>
		</Modal>
	)
}
export default ModalEditProfile

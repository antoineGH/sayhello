import { UploadOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Input, Modal, Upload } from 'antd'
import { useEffect } from 'react'

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
	handleOk: () => void
	handleCancel: () => void
}

const ModalEditProfile = ({ profile, visible, confirmLoading, handleOk, handleCancel }: Props) => {
	useEffect(() => {
		console.log('trigger useEffect profile changed')
	}, [profile])

	// BUG:  SOLUTION UPDATE FORM, RESET WITH USEEFFECT
	// You need to provide the default value but also to useEffect to reset. That particular distinction is required if you have a form that you reload with another entity. I have a complete example in CodeSanbox here.

	// In a nutshell: You need to define your defaultValues in the userForm.

	//  const { register, reset, handleSubmit } = useForm({
	//     defaultValues: useMemo(() => {
	//       return props.user;
	//     }, [props])
	//   });
	// Then you need to listen to potential change.

	//   useEffect(() => {
	//     reset(props.user);
	//   }, [props.user]);
	// The example in the Code Sandbox allows swapping between two users and have the form change its values.

	return (
		<Modal
			className='edit_course_modal'
			title='Edit Profile'
			visible={visible}
			onOk={handleOk}
			okText='Update'
			confirmLoading={confirmLoading}
			onCancel={handleCancel}>
			<Avatar size={100} src={profile.avatar} icon={<UserOutlined />} />
			<Upload>
				<Button icon={<UploadOutlined />}>Click to Upload</Button>
			</Upload>
			<Form
				name='edit-account'
				initialValues={{ username: profile.name }}
				// onFinish={onFinish}
				// onFinishFailed={onFinishFailed}
				autoComplete='off'>
				<Form.Item
					label='Username'
					className='edit_firstname_row'
					name='username'
					rules={[{ required: false, message: 'Please input your username' }]}>
					<Input className='edit_firstname' />
				</Form.Item>
			</Form>
		</Modal>
	)
}
export default ModalEditProfile

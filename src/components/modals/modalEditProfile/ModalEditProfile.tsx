import { Button, Modal } from 'antd'
import { useState } from 'react'

const ModalEditProfile = () => {
	const [visible, setVisible] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)

	const showModal = () => {
		setVisible(true)
	}

	const handleOk = () => {
		setConfirmLoading(true)
		setTimeout(() => {
			setVisible(false)
			setConfirmLoading(false)
		}, 2000)
	}

	const handleCancel = () => {
		setVisible(false)
	}

	return (
		<>
			<Button type='link' onClick={showModal}>
				Edit
			</Button>
			<Modal
				title='Edit Profile'
				visible={visible}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}>
				Test
			</Modal>
		</>
	)
}
export default ModalEditProfile

import { useState } from 'react'
import { Button, Col, InputNumber, Modal, Row, Slider } from 'antd'

// TODO: Props to receive:
// TODO: goal value:number => setValue with goal value
// TODO: handleOk => dispatch update from local state values to Redux store to update goal
// TODO: Modal async: setConfirmLoading replaced with loadingState selector return on updateGoal action

const ModalEditGoals = () => {
	const [visible, setVisible] = useState(false)
	const [value, setValue] = useState(5)
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

	function onChange(goalValue: any) {
		console.log('goal = ', goalValue)
		setValue(goalValue)
	}

	return (
		<>
			<Button type='link' onClick={showModal}>
				Edit
			</Button>
			<Modal
				title='Edit Courses'
				visible={visible}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}>
				<Row>
					<Col span={12}>
						<Slider min={0} max={7} onChange={onChange} value={value} />
					</Col>
				</Row>
				<Row>
					<InputNumber min={0} max={7} value={value} onChange={onChange} />
				</Row>
			</Modal>
		</>
	)
}
export default ModalEditGoals

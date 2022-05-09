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
				className='edit_course_modal'
				title='Edit Goals'
				visible={visible}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}>
				<Row className='row_slider'>
					<Col xs={24} sm={14} style={{ marginRight: '1rem' }}>
						<Slider
							min={0}
							max={7}
							tooltipVisible={false}
							onChange={onChange}
							value={value}
							className='slider_goal'
						/>
					</Col>
					<Col xs={8} sm={6}>
						<InputNumber
							min={0}
							max={7}
							value={value}
							formatter={(value) => `${value} Days`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
							onChange={onChange}
							style={{ width: '100%' }}
							className='input_goal'
						/>
					</Col>
				</Row>
				<Row></Row>
			</Modal>
		</>
	)
}
export default ModalEditGoals

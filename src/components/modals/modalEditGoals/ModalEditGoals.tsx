import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { updateGoal } from 'features/goals/actions'
import { goalDays, goalID } from 'features/goals/selectors'
import { GoalUpdateIn } from 'types/goal'
import { Button, Col, InputNumber, Modal, Row, Slider } from 'antd'

interface ModalEditGoalsProps {
  loading: boolean
}

const ModalEditGoals = ({ loading }: ModalEditGoalsProps) => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(0)
  const dispatch = useAppDispatch()

  const id = Number(useAppSelector(goalID)[0])
  const days = useAppSelector(goalDays)

  useEffect(() => {
    const entries = Object.entries(days)
    if (entries) {
      if (entries[0]) {
        if (entries[0][1]) setValue(entries[0][1]?.days)
      }
    }
  }, [days])

  const handleOk = () => {
    const goalUpdate: GoalUpdateIn = {
      id: id,
      days: value
    }
    dispatch(updateGoal(goalUpdate))
    setVisible(false)
  }

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  function onChange(goalValue: any) {
    setValue(goalValue)
  }

  return (
    <>
      <Button type="link" onClick={showModal}>
        Edit
      </Button>
      <Modal
        className="edit_course_modal"
        title="Edit Goals"
        visible={visible}
        onOk={handleOk}
        confirmLoading={loading}
        onCancel={handleCancel}
      >
        <Row className="row_slider">
          <Col xs={24} sm={14} style={{ marginRight: '1rem' }}>
            <Slider
              min={0}
              max={7}
              tooltipVisible={false}
              onChange={onChange}
              value={value}
              className="slider_goal"
            />
          </Col>
          <Col xs={8} sm={6}>
            <InputNumber
              min={0}
              max={7}
              value={value}
              formatter={value =>
                `${value} Day${value && value >= 2 ? 's' : ''}`.replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ','
                )
              }
              onChange={onChange}
              style={{ width: '100%' }}
              className="input_goal"
            />
          </Col>
        </Row>
        <Row></Row>
      </Modal>
    </>
  )
}
export default ModalEditGoals

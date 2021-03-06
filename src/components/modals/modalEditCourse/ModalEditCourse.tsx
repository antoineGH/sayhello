import { useState } from 'react'
import { Button, Checkbox, Col, Modal, Row } from 'antd'
import './style.css'

const ModalEditCourse = () => {
  const [values, setValues] = useState([1, 3])
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const options = [
    { label: 'Course 1', value: 1 },
    { label: 'Course 2', value: 2 },
    { label: 'Course 3', value: 3 },
    { label: 'Course 4', value: 4 }
  ]

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

  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues)
    setValues(checkedValues)
  }

  return (
    <>
      <Button type="link" onClick={showModal}>
        Edit
      </Button>
      <Modal
        className="edit_course_modal"
        title="Edit Courses"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Checkbox.Group
          defaultValue={values}
          onChange={onChange}
          style={{ width: '100%' }}
        >
          <Row>
            {options.map((option, count) => {
              count++
              return (
                <Col key={count} span={24}>
                  <Checkbox value={option.value}>{option.label}</Checkbox>
                </Col>
              )
            })}
          </Row>
        </Checkbox.Group>
      </Modal>
    </>
  )
}
export default ModalEditCourse

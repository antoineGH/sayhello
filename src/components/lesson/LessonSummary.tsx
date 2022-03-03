import { Button, Col, Row, Statistic, Tooltip, Typography } from 'antd'
import { BorderOutlined, CheckSquareOutlined } from '@ant-design/icons'
import './style.css'

interface Props {
	lessonID: number
	lessonName: string
	author: string
	duration: number
	difficulty: number
	completed: boolean
	courseID: number
	handleLesson: (lessonID: number) => void
}

const LessonSummary = ({
	lessonID,
	lessonName,
	author,
	duration,
	difficulty,
	completed,
	courseID,
	handleLesson,
}: Props) => {
	const { Title } = Typography
	return (
		<>
			<Row>
				<Col span={4}>
					<Title level={4}>{lessonName}</Title>
				</Col>
				<Col offset={18}>
					<Tooltip title={completed ? `${lessonName} completed` : `${lessonName} not completed`}>
						{completed ? (
							<CheckSquareOutlined className='checkedLesson' />
						) : (
							<BorderOutlined className='uncheckedLesson' />
						)}
					</Tooltip>
				</Col>
			</Row>
			<Row style={{ marginTop: '1rem' }}>
				<Col span={4}>
					<Statistic title='Duration' value={duration} suffix='h' />
				</Col>
				<Col span={2} offset={18}>
					<Statistic title='Difficulty' value={difficulty} suffix='/10' />
				</Col>
			</Row>
			<Button style={{ marginTop: '1rem' }} onClick={() => handleLesson(lessonID)}>
				{completed ? 'Resume' : 'Start'}
			</Button>
		</>
	)
}

export default LessonSummary

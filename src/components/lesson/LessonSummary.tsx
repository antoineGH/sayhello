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
				<Col span={22}>
					<div className='ant-statistic-title'>LESSON</div>
				</Col>
				<Col span={1} offset={1} style={{ justifyContent: 'center', display: 'flex' }}>
					<Tooltip title={completed ? `${lessonName} completed` : `${lessonName} not completed`}>
						{completed && <CheckSquareOutlined className='checkedLesson' />}
					</Tooltip>
				</Col>
			</Row>
			<Row>
				<Col span={4}>
					<Title level={4}>{lessonName}</Title>
				</Col>
			</Row>
			<Row>
				<Col span={4}>
					<Statistic className='stat_course_lower' title='Duration' value={duration} suffix='h' />
				</Col>
				<Col span={4}>
					<Statistic className='stat_course_lower' title='Difficulty' value={difficulty} suffix='/10' />
				</Col>
				<Col span={1} offset={15} className='col_course_summary_btn'>
					<Button style={{ marginTop: '1rem' }} onClick={() => handleLesson(lessonID)}>
						{completed ? 'Resume' : 'Start'}
					</Button>
				</Col>
			</Row>
		</>
	)
}

export default LessonSummary

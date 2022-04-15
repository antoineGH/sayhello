import { BorderOutlined, CheckSquareOutlined } from '@ant-design/icons'
import { Button, Col, Progress, Row, Statistic, Tag, Tooltip, Typography } from 'antd'

interface Props {
	courseID: number
	courseName: string
	duration: number
	difficulty: number
	completed: number
	numberLesson: number
	numberQuiz: number
	tags: string[]
	handleCourse: (courseID: number) => void
	isEnrolled: boolean
}

const CourseSummary = ({
	courseID,
	courseName,
	duration,
	difficulty,
	completed,
	numberLesson,
	numberQuiz,
	tags,
	handleCourse,
	isEnrolled,
}: Props) => {
	const { Title } = Typography

	const getContains = (numberLesson: number, numberQuiz: number) => {
		return `${numberLesson} lesson${numberLesson > 1 ? 's' : ''} / ${numberQuiz} quiz${numberQuiz > 1 ? 'zes' : ''}`
	}

	return (
		<>
			<Row>
				<Col span={22}>
					<div className='ant-statistic-title'>COURSE</div>
				</Col>
				<Col span={1} offset={1} style={{ justifyContent: 'center', display: 'flex', marginBottom: '1rem' }}>
					<Tooltip title={completed === 100 ? `${courseName} completed` : `${courseName} not completed`}>
						{completed === 100 && (
							<CheckSquareOutlined className='checkedLesson' style={{ color: '#4010e5' }} />
						)}
					</Tooltip>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Title level={4}>{courseName}</Title>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					{tags.map((tag, count) => {
						count++
						return <Tag key={count}>{tag}</Tag>
					})}
				</Col>
			</Row>
			{!isEnrolled && <Progress percent={completed} status='active' strokeColor='#ffd300' />}
			<Row style={{ marginTop: '1rem' }}>
				<Col span={6}>
					<Statistic title='Contains' value={getContains(numberLesson, numberQuiz)} />
				</Col>
				<Col span={6}>
					<Statistic title='Duration' value={duration} suffix='h' />
				</Col>
				<Col span={6}>
					<Statistic title='Difficulty' value={difficulty} suffix='/10' />
				</Col>
				<Col span={5} offset={1} style={{ justifyContent: 'flex-end', display: 'flex' }}>
					<Button style={{ marginTop: '1rem' }} onClick={() => handleCourse(courseID)}>
						{isEnrolled ? 'Enroll' : 'Resume'}
					</Button>
				</Col>
			</Row>
		</>
	)
}
export default CourseSummary

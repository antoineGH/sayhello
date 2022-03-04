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
				<Col span={4}>
					<Title level={4}>{courseName}</Title>
				</Col>
			</Row>
			<Row>
				<Col span={4}>
					{tags.map((tag, count) => {
						count++
						return <Tag key={count}>{tag}</Tag>
					})}
				</Col>
				<Col span={1} offset={19} style={{ justifyContent: 'center', display: 'flex', marginBottom: '1rem' }}>
					<Tooltip title={completed === 100 ? `${courseName} completed` : `${courseName} not completed`}>
						{completed ? (
							<CheckSquareOutlined className='checkedLesson' />
						) : (
							<BorderOutlined className='uncheckedLesson' />
						)}
					</Tooltip>
				</Col>
			</Row>
			{!isEnrolled && <Progress percent={completed} status='active' />}
			<Row style={{ marginTop: '1rem' }}>
				<Col span={7}>
					<Statistic title='Contains' value={getContains(numberLesson, numberQuiz)} />
				</Col>
				<Col span={4}>
					<Statistic title='Duration' value={duration} suffix='h' />
				</Col>
				<Col span={4}>
					<Statistic title='Difficulty' value={difficulty} suffix='/10' />
				</Col>
				<Col span={1} offset={8} style={{ justifyContent: 'center', display: 'flex' }}>
					<Button style={{ marginTop: '1rem' }} onClick={() => handleCourse(courseID)}>
						{isEnrolled ? 'Enroll' : 'Resume'}
					</Button>
				</Col>
			</Row>
		</>
	)
}
export default CourseSummary

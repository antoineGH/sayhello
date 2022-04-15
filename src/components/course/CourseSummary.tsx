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
		return ` lesson${numberLesson + numberQuiz > 1 ? 's' : ''}`
	}

	return (
		<>
			<Row>
				<Col span={22}>
					<div className='ant-statistic-title'>COURSE</div>
				</Col>
				<Col span={1} offset={1} style={{ justifyContent: 'center', display: 'flex' }}>
					<Tooltip title={completed === 100 ? `${courseName} completed` : `${courseName} not completed`}>
						{completed === 100 && <CheckSquareOutlined className='checkedLesson' />}
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
			{!isEnrolled && (
				<Progress percent={completed} status='active' strokeColor='#ffd300' style={{ marginTop: '0.3rem' }} />
			)}
			<Row style={{ marginTop: '1rem' }}>
				<Col span={6}>
					<Statistic
						className='stat_course_lower'
						title='Contains'
						value={numberLesson + numberQuiz}
						suffix={getContains(numberLesson, numberQuiz)}
					/>
				</Col>
				<Col span={6}>
					<Statistic className='stat_course_lower' title='Duration' value={duration} suffix='h' />
				</Col>
				<Col span={6}>
					<Statistic className='stat_course_lower' title='Difficulty' value={difficulty} suffix='/10' />
				</Col>
				<Col span={5} offset={1} className='col_course_summary_btn'>
					<Button style={{ marginTop: '1rem' }} onClick={() => handleCourse(courseID)}>
						{isEnrolled ? 'Enroll' : 'Resume'}
					</Button>
				</Col>
			</Row>
		</>
	)
}
export default CourseSummary

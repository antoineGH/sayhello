import { TrophyOutlined } from '@ant-design/icons'
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
	isNotEnrolled: boolean
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
	isNotEnrolled,
}: Props) => {
	const { Title } = Typography

	const getContains = (numberLesson: number, numberQuiz: number) => {
		return ` lesson${numberLesson + numberQuiz > 1 ? 's' : ''}`
	}

	return (
		<>
			<Row>
				<Col span={20}>
					<Row>
						<Col>
							<div className='ant-statistic-title'>COURSE</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<Title level={4}>{courseName}</Title>
						</Col>
						{completed === 100 ? (
							<Col span={1} style={{ marginLeft: '.7rem' }}>
								<Tooltip title={`${courseName} Completed`}>
									<div className='circle'>
										<TrophyOutlined className='trophy_elem' />
									</div>
								</Tooltip>
							</Col>
						) : (
							''
						)}
					</Row>
					<Row>
						<Col>
							{tags.map((tag) => {
								return <Tag key={tag}>{tag}</Tag>
							})}
						</Col>
					</Row>
					<Row>
						{!isNotEnrolled && (
							<Progress
								percent={completed}
								status='active'
								strokeColor='#ffd300'
								style={{ marginTop: '0.3rem' }}
							/>
						)}
					</Row>
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
							<Statistic
								className='stat_course_lower'
								title='Difficulty'
								value={difficulty}
								suffix='/10'
							/>
						</Col>
					</Row>
				</Col>
				<Col
					span={4}
					className='btn_quiz_col'
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
					}}>
					<Button
						className={completed === 100 ? 'btn_quiz btn_quiz_resume' : 'btn_quiz'}
						style={{ marginTop: '1rem' }}
						onClick={() => handleCourse(courseID)}>
						{completed ? 'Resume' : 'Enroll'}
					</Button>
				</Col>
			</Row>
		</>
	)
}
export default CourseSummary

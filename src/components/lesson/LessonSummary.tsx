import { Link } from 'react-router-dom'
import { Button, Col, Row, Statistic, Tooltip, Typography } from 'antd'
import { TrophyOutlined } from '@ant-design/icons'
import './style.css'

interface Props {
	lessonID: number
	lessonName: string
	author: string
	duration: number
	difficulty: number
	completed: boolean
	courseID: number
	courseName: string
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
	courseName,
	handleLesson,
}: Props) => {
	const { Title } = Typography
	return (
		<>
			<Row>
				<Col xs={24} sm={20}>
					<Row>
						<Col>
							<div className='ant-statistic-title'>
								<span className='span_lesson'>LESSON</span>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<Title level={4}>{lessonName}</Title>
						</Col>
						{completed ? (
							<Col xs={3} md={2} lg={1}>
								<Tooltip title='Completed'>
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
						<Col xs={{ span: 24, order: 4 }} sm={8} md={6} lg={4}>
							<Link to={`/auth/course/${courseID}`}>
								<Statistic
									className='stat_related'
									title='Related to'
									value={courseName}
									valueStyle={{ color: '#1890ff' }}
								/>
							</Link>
						</Col>
						<Col xs={24} sm={8} md={6} lg={4}>
							<Statistic className='stat_course_lower' title='Duration' value={duration} suffix='h' />
						</Col>
						<Col xs={24} sm={8} md={6} lg={4}>
							<Statistic
								className='stat_course_lower'
								title='Difficulty'
								value={difficulty}
								suffix='/10'
							/>
						</Col>
					</Row>
				</Col>
				<Col xs={24} md={4} className='btn_quiz_col'>
					<Button
						style={{ marginTop: '1rem' }}
						className={completed ? 'btn_quiz btn_quiz_resume' : 'btn_quiz'}
						onClick={() => handleLesson(lessonID)}>
						{completed ? 'Resume' : 'Start'}
					</Button>
				</Col>
			</Row>
		</>
	)
}

export default LessonSummary

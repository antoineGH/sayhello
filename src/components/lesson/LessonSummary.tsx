import { Button, Col, Row, Statistic, Tooltip, Typography } from 'antd'
import { CheckSquareOutlined, TrophyOutlined } from '@ant-design/icons'
import './style.css'
import { Link } from 'react-router-dom'
import Course from 'pages/Course'

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
				<Col span={22}>
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
							<Col span={1}>
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
						<Col span={4}>
							<Link to={`/auth/course/${courseID}`}>
								<Statistic
									className='stat_related'
									title='Related to'
									value={courseName}
									valueStyle={{ color: '#1890ff' }}
								/>
							</Link>
						</Col>
						<Col span={4}>
							<Statistic className='stat_course_lower' title='Duration' value={duration} suffix='h' />
						</Col>
						<Col span={4}>
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
					span={2}
					className='btn_quiz_col'
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
					}}>
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

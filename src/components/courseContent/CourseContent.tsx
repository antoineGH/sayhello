import { BorderOutlined, CheckSquareOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Row, Statistic, Tag, Tooltip, Typography } from 'antd'
import { useNavigate } from 'react-router'
import './style.css'

type Lessons = Lesson[]

interface Lesson {
	lessonID: number
	lessonName: string
	author: string
	duration: number
	difficulty: number
	completed: boolean
	courseID: number
}

interface Course {
	courseID: number
	courseName: string
	duration: number
	difficulty: number
	completed: number
	numberLesson: number
	numberQuiz: number
	tags: string[]
}

interface props {
	lessons: Lessons
	tags: string[]
	course: Course
}

const CourseContent = ({ course, tags, lessons }: props) => {
	const { Text, Title } = Typography
	const navigate = useNavigate()

	const getContains = (numberLesson: number, numberQuiz: number) => {
		return `${numberLesson} lesson${numberLesson > 1 ? 's' : ''} / ${numberQuiz} quiz${numberQuiz > 1 ? 'zes' : ''}`
	}

	const handleClickLesson = (lessonID: number) => {
		console.log('handleStartLesson')
		navigate(`/auth/lesson/${lessonID}`)
	}

	return (
		<div className='container_quiz'>
			<Row className='center title_row'>
				<Col>
					<Title level={3}>{course.courseName}</Title>
				</Col>
				{course.completed === 100 && (
					<Col style={{ marginLeft: '1rem', marginBottom: '.4rem', transform: 'scale(0.75)' }}>
						<Tooltip title={`${course.courseName} completed`}>
							<CheckSquareOutlined className='checkedLesson' />
						</Tooltip>
					</Col>
				)}
			</Row>
			<Row className='center'>
				<Col>
					{tags.map((tag, count) => {
						count++
						return (
							<Tooltip key={count} title={tag}>
								<Tag>{tag}</Tag>
							</Tooltip>
						)
					})}
				</Col>
			</Row>

			<Row className='center mt1'>
				<Col span={8} className='center '>
					<Statistic title='Contains' value={getContains(course.numberLesson, course.numberQuiz)} />
				</Col>
				<Col span={8} className='center'>
					<Statistic title='Duration' value={course.duration} suffix='h' />
				</Col>
				<Col span={8} className='center'>
					<Statistic title='Difficulty' value={course.difficulty} suffix='/10' />
				</Col>
			</Row>
			<Divider dashed />

			{lessons.map((lesson, count) => {
				count++
				return (
					<div className='lesson_container'>
						<Row>
							<Col
								style={{
									justifyContent: 'center',
									display: 'flex',
									marginTop: '0.15rem',
									marginLeft: '-0.2rem',
									marginRight: '0.2rem',
									transform: 'scale(0.75)',
								}}>
								<Tooltip
									title={
										lesson.completed
											? `${lesson.lessonName} completed`
											: `${lesson.lessonName} not completed`
									}>
									{lesson.completed ? (
										<CheckSquareOutlined className='checkedLesson' />
									) : (
										<BorderOutlined className='uncheckedLesson' />
									)}
								</Tooltip>
							</Col>
							<Col>
								<Title level={4}>{lesson.lessonName}</Title>
							</Col>

							<Col
								span={2}
								offset={18}
								style={{ justifyContent: 'center', alignSelf: 'center', display: 'flex' }}>
								<Button onClick={() => handleClickLesson(lesson.lessonID)}>
									{lesson.completed ? 'Resume' : 'Start'}
								</Button>
							</Col>
						</Row>
						<Row style={{ marginTop: '1rem' }}>
							<Col span={4}>
								<Statistic title='Duration' value={lesson.duration} suffix='h' />
							</Col>
							<Col span={4}>
								<Statistic title='Difficulty' value={lesson.difficulty} suffix='/10' />
							</Col>
						</Row>
					</div>
				)
			})}
		</div>
	)
}

export default CourseContent

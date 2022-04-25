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
	const { Title } = Typography
	const navigate = useNavigate()

	const getContains = (numberLesson: number, numberQuiz: number) => {
		return ` module${numberLesson + numberQuiz > 1 ? 's' : ''}`
	}

	const handleClickLesson = (lessonID: number) => {
		console.log('handleStartLesson')
		navigate(`/auth/lesson/${lessonID}`)
	}

	return (
		<>
			<Row>
				<Col span={22}>
					<div className='ant-statistic-title'>COURSE</div>
				</Col>
				<Col span={1} offset={1} style={{ justifyContent: 'center', display: 'flex' }}>
					<Tooltip
						title={
							course.completed === 100
								? `${course.courseName} completed`
								: `${course.courseName} not completed`
						}>
						{course.completed === 100 && <CheckSquareOutlined className='checkedLesson' />}
					</Tooltip>
				</Col>
			</Row>
			<Row>
				<Col>
					<Title level={4}>{course.courseName}</Title>
				</Col>
			</Row>
			<Row className='center'>
				<Col span={24}>
					{tags.map((tag) => {
						return <Tag key={tag}>{tag}</Tag>
					})}
				</Col>
			</Row>

			<Row style={{ marginTop: '1rem' }}>
				<Col span={6}>
					<Statistic
						className='stat_course_lower'
						title='Contains'
						value={course.numberLesson + course.numberQuiz}
						suffix={getContains(course.numberLesson, course.numberQuiz)}
					/>
				</Col>
				<Col span={6}>
					<Statistic className='stat_course_lower' title='Duration' value={course.duration} suffix='h' />
				</Col>
				<Col span={6}>
					<Statistic
						className='stat_course_lower'
						title='Difficulty'
						value={course.difficulty}
						suffix='/10'
					/>
				</Col>
			</Row>
			<Divider dashed />

			{/* LESSON */}

			{lessons.map((lesson, count) => {
				count++
				return (
					<div className='lesson_container' key={count}>
						<Row>
							<Col span={22}>
								<div className='ant-statistic-title'>COURSE</div>
							</Col>
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
		</>
	)
}

export default CourseContent

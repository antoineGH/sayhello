import { CheckSquareOutlined } from '@ant-design/icons'
import { Col, Divider, Row, Statistic, Tag, Tooltip, Typography } from 'antd'
import LessonCard from 'components/lessonCard/LessonCard'
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
			<Row>
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
			<Row className='row_lesson'>
				{lessons.map((lesson, count) => {
					count++
					return <LessonCard key={lesson.lessonID} handleClickLesson={handleClickLesson} lesson={lesson} />
				})}
			</Row>
		</>
	)
}

export default CourseContent

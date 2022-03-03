import { Button, Card, Typography } from 'antd'
import CourseSummary from 'components/course/CourseSummary'
import { count } from 'console'
import { useNavigate } from 'react-router'
import './style.css'

const CourseList = () => {
	const { Title } = Typography
	const navigate = useNavigate()
	const courses = [
		{ courseID: 1, courseName: 'Course 1', duration: 1, difficulty: 1, completed: 100 },
		{ courseID: 2, courseName: 'Course 2', duration: 2, difficulty: 2, completed: 12 },
		{ courseID: 3, courseName: 'Course 3', duration: 3, difficulty: 3, completed: 75 },
		{ courseID: 4, courseName: 'Course 4', duration: 4, difficulty: 4, completed: 0 },
	]

	const handleResumeCourse = (courseID: number) => {
		console.log('handleResumeCourse')
		navigate(`/course/${courseID}`)
	}

	const handleEditCourse = () => {
		console.log('handleEditCourse')
	}

	return (
		<div className='course_main'>
			<div className='course_title'>
				<Title level={3}>My Courses</Title>
				<Button onClick={handleEditCourse} type='link'>
					Edit
				</Button>
			</div>
			<Card bordered={false}>
				{courses.map((course, count) => {
					count++
					return (
						<CourseSummary
							key={count}
							courseID={course.courseID}
							courseName={course.courseName}
							duration={course.duration}
							difficulty={course.difficulty}
							completed={course.completed}
							handleResumeCourse={handleResumeCourse}
						/>
					)
				})}
			</Card>
		</div>
	)
}
export default CourseList

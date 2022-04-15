import { Card, Typography } from 'antd'
import CourseSummary from 'components/course/CourseSummary'
import ModalEditCourse from 'components/modals/modalEditCourse/ModalEditCourse'
import { useNavigate } from 'react-router'
import './style.css'

const CourseList = () => {
	const { Title } = Typography
	const navigate = useNavigate()
	const courses = [
		{
			courseID: 1,
			courseName: 'Learn Redux',
			duration: 1,
			difficulty: 1,
			completed: 100,
			numberLesson: 6,
			numberQuiz: 2,
			tags: ['ESL', 'English', 'Native Speaker'],
		},
		{
			courseID: 2,
			courseName: 'Learn Flask',
			duration: 2,
			difficulty: 2,
			completed: 12,
			numberLesson: 6,
			numberQuiz: 2,
			tags: ['ESL', 'Advanced English', 'Native Speaker'],
		},
		{
			courseID: 3,
			courseName: 'Learn Javascript',
			duration: 3,
			difficulty: 3,
			completed: 75,
			numberLesson: 6,
			numberQuiz: 2,
			tags: ['ESL', 'Intermediate English', 'Native Speaker'],
		},
		{
			courseID: 4,
			courseName: 'Learn Typescript',
			duration: 4,
			difficulty: 4,
			completed: 0,
			numberLesson: 6,
			numberQuiz: 2,
			tags: ['ESL', 'Native Level English', 'Native Speaker'],
		},
	]

	const handleResumeCourse = (courseID: number) => {
		console.log('handleResumeCourse')
		navigate(`/auth/course/${courseID}`)
	}

	return (
		<div className='course_main'>
			<div className='course_title'>
				<Title level={3}>My Courses</Title>
				<ModalEditCourse />
			</div>
			{courses.map((course, count) => {
				count++
				return (
					<Card key={count} bordered={false} style={{ marginBottom: '1rem' }}>
						<CourseSummary
							key={count}
							courseID={course.courseID}
							courseName={course.courseName}
							duration={course.duration}
							difficulty={course.difficulty}
							completed={course.completed}
							numberLesson={course.numberLesson}
							numberQuiz={course.numberQuiz}
							tags={course.tags}
							handleCourse={handleResumeCourse}
							isNotEnrolled={false}
						/>
					</Card>
				)
			})}
		</div>
	)
}
export default CourseList

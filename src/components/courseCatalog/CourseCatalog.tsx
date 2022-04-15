import { Card, Typography } from 'antd'
import CourseSummary from 'components/course/CourseSummary'
import { useNavigate } from 'react-router'
import './style.css'

const CourseCatalog = () => {
	const { Title } = Typography
	const navigate = useNavigate()
	const courses = [
		{
			courseID: 1,
			courseName: 'Learn Redux',
			duration: 1,
			difficulty: 1,
			completed: 0,
			numberLesson: 3,
			numberQuiz: 3,
			tags: ['ESL', 'English', 'Native Speaker'],
		},
		{
			courseID: 2,
			courseName: 'Learn Flask',
			duration: 2,
			difficulty: 2,
			completed: 0,
			numberLesson: 2,
			numberQuiz: 1,
			tags: ['ESL', 'Advanced English', 'Native Speaker'],
		},
		{
			courseID: 3,
			courseName: 'Learn Javascript',
			duration: 3,
			difficulty: 3,
			completed: 100,
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
			numberLesson: 2,
			numberQuiz: 1,
			tags: ['ESL', 'Native Level English', 'Native Speaker'],
		},
	]

	const handleEnrollCourse = (courseID: number) => {
		console.log('handleEnrollCourse')
		navigate(`/auth/course/${courseID}`)
	}

	return (
		<div className='course_main'>
			<div className='course_title'>
				<Title level={3}>Available Courses</Title>
			</div>
			{courses.map((course, count) => {
				count++
				return (
					<Card key={count} bordered={false} style={{ marginBottom: '1rem' }}>
						<CourseSummary
							courseID={course.courseID}
							courseName={course.courseName}
							duration={course.duration}
							difficulty={course.difficulty}
							completed={course.completed}
							numberLesson={course.numberLesson}
							numberQuiz={course.numberQuiz}
							tags={course.tags}
							handleCourse={handleEnrollCourse}
							isNotEnrolled={true}
						/>
					</Card>
				)
			})}
		</div>
	)
}
export default CourseCatalog

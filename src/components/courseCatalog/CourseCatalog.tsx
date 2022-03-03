import { Card, Typography } from 'antd'
import CourseSummary from 'components/course/CourseSummary'
import { useNavigate } from 'react-router'

const CourseCatalog = () => {
	const { Title } = Typography
	const navigate = useNavigate()
	const courses = [
		{
			courseID: 1,
			courseName: 'Course 1',
			duration: 1,
			difficulty: 1,
			completed: 0,
			tags: ['ESL', 'English', 'Native Speaker'],
		},
		{
			courseID: 2,
			courseName: 'Course 2',
			duration: 2,
			difficulty: 2,
			completed: 0,
			tags: ['ESL', 'Advanced English', 'Native Speaker'],
		},
		{
			courseID: 3,
			courseName: 'Course 3',
			duration: 3,
			difficulty: 3,
			completed: 0,
			tags: ['ESL', 'Intermediate English', 'Native Speaker'],
		},
		{
			courseID: 4,
			courseName: 'Course 4',
			duration: 4,
			difficulty: 4,
			completed: 0,
			tags: ['ESL', 'Native Level English', 'Native Speaker'],
		},
	]

	const handleEnrollCourse = (courseID: number) => {
		console.log('handleEnrollCourse')
		navigate(`/course/${courseID}`)
	}

	return (
		<>
			<div className='course_title'>
				<Title level={3}>Available Courses</Title>
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
							tags={course.tags}
							handleCourse={handleEnrollCourse}
							isEnrolled={true}
						/>
					)
				})}
			</Card>
		</>
	)
}
export default CourseCatalog

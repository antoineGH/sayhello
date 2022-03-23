import { PageHeader, Typography } from 'antd'
import CourseContent from 'components/courseContent/CourseContent'
import useTitle from 'hooks/useTitle'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

const CoursePage = () => {
	const navigate = useNavigate()
	const urlParams = useParams()
	const courseID = urlParams?.courseID
	useTitle(`Course ${courseID}`)
	const { Title } = Typography

	const course = {
		courseID: 1,
		courseName: 'Course 1',
		duration: 1,
		difficulty: 1,
		completed: 0,
		numberLesson: 3,
		numberQuiz: 3,
		tags: ['ESL', 'English', 'Native Speaker'],
	}

	const tags = ['ESL English', 'ESL', 'English']

	const lessons = [
		{
			lessonID: 1,
			lessonName: 'Lesson 1',
			author: 'Antoine',
			duration: 1,
			difficulty: 2,
			completed: false,
			courseID: 1,
		},
		{
			lessonID: 2,
			lessonName: 'Lesson 2',
			author: 'Bastien',
			duration: 2,
			difficulty: 4,
			completed: false,
			courseID: 1,
		},
	]

	return (
		<div>
			<PageHeader
				className='site-page-header'
				onBack={() => navigate(-1)}
				title='Course'
				subTitle='Course Summary'
			/>
			<div
				style={{
					margin: '1rem 1rem 1rem 1.5rem',
				}}>
				<div className='quiz_title'>
					<Title level={3}>{course.courseName}</Title>
				</div>
				<div className='quiz_content'>
					<CourseContent course={course} tags={tags} lessons={lessons} />
				</div>
			</div>
		</div>
	)
}
export default CoursePage

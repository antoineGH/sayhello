import { Card, PageHeader } from 'antd'
import CourseContent from 'components/courseContent/CourseContent'
import useTitle from 'hooks/useTitle'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

const CoursePage = () => {
	const navigate = useNavigate()
	const urlParams = useParams()
	const courseID = urlParams?.courseID
	useTitle(`Course ${courseID}`)

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
			completed: true,
			courseID: 1,
		},
		{
			lessonID: 2,
			lessonName: 'Lesson 2',
			author: 'Bastien',
			duration: 2,
			difficulty: 4,
			completed: true,
			courseID: 1,
		},
		{
			lessonID: 3,
			lessonName: 'Lesson 3',
			author: 'Bastien',
			duration: 3,
			difficulty: 4,
			completed: false,
			courseID: 1,
		},
		{
			lessonID: 4,
			lessonName: 'Lesson 4',
			author: 'Bastien',
			duration: 4,
			difficulty: 4,
			completed: false,
			courseID: 1,
		},
		{
			lessonID: 5,
			lessonName: 'Lesson 5',
			author: 'Bastien',
			duration: 5,
			difficulty: 4,
			completed: false,
			courseID: 1,
		},
		{
			lessonID: 6,
			lessonName: 'Lesson 6',
			author: 'Bastien',
			duration: 6,
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
			<Card bordered={false} style={{ marginLeft: '1rem', marginRight: '1rem', marginBottom: '1rem' }}>
				<CourseContent course={course} tags={tags} lessons={lessons} />
			</Card>
		</div>
	)
}
export default CoursePage

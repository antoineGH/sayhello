import { Card, Typography } from 'antd'
import LessonSummary from 'components/lesson/LessonSummary'
import { useNavigate } from 'react-router'
import './style.css'

const LessonCatalog = () => {
	const { Title } = Typography
	const navigate = useNavigate()
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
			author: 'Catherine',
			duration: 3,
			difficulty: 5,
			completed: false,
			courseID: 2,
		},
		{
			lessonID: 4,
			lessonName: 'Lesson 4',
			author: 'Thierry',
			duration: 4,
			difficulty: 5,
			completed: false,
			courseID: 3,
		},
	]

	const handleStartLesson = (lessonID: number) => {
		console.log('handleStartLesson')
		navigate(`/auth/lesson/${lessonID}`)
	}

	return (
		<div className='course_main'>
			<div className='course_title'>
				<Title level={3}>Available Lessons</Title>
			</div>
			{lessons.map((lesson, count) => {
				count++
				return (
					<Card key={count} bordered={false} style={{ marginBottom: '1rem' }}>
						<LessonSummary
							lessonID={lesson.lessonID}
							lessonName={lesson.lessonName}
							author={lesson.author}
							duration={lesson.duration}
							difficulty={lesson.difficulty}
							completed={lesson.completed}
							courseID={lesson.courseID}
							handleLesson={handleStartLesson}
						/>
					</Card>
				)
			})}
		</div>
	)
}

export default LessonCatalog

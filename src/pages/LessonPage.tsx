import { PageHeader, Typography } from 'antd'
import LessonContent from 'components/lessonContent/LessonContent'
import useTitle from 'hooks/useTitle'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

const LessonPage = () => {
	const navigate = useNavigate()
	const urlParams = useParams()
	const lessonID = urlParams?.lessonID
	useTitle(`Lesson ${lessonID}`)
	const { Title } = Typography

	const lessons = [
		{
			id: 1,
			name: 'Lesson ESL1-1',
			author: 'Teacher Barbenes',
			duration: 1,
			difficulty: 1,
			course_id: 1,
		},
		{
			id: 2,
			name: 'Lesson ESL1-2',
			author: 'Teacher Barbenes',
			duration: 1,
			difficulty: 1,
			course_id: 1,
		},
		{
			id: 3,
			name: 'Lesson ESL2-1',
			author: 'Teacher Barbenes',
			duration: 2,
			difficulty: 2,
			course_id: 2,
		},
		{
			id: 4,
			name: 'Lesson ESL2-2',
			author: 'Teacher Barbenes',
			duration: 1,
			difficulty: 1,
			course_id: 2,
		},
		{
			id: 5,
			name: 'Lesson ESL3-1',
			author: 'Teacher Barbenes',
			duration: 3,
			difficulty: 3,
			course_id: 3,
		},
		{
			id: 6,
			name: 'Lesson ESL3-2',
			author: 'Teacher Barbenes',
			duration: 1,
			difficulty: 1,
			course_id: 3,
		},
		{
			id: 7,
			name: 'Lesson ESL4-1',
			author: 'Teacher Barbenes',
			duration: 4,
			difficulty: 4,
			course_id: 4,
		},
		{
			id: 8,
			name: 'Lesson ESL4-2',
			author: 'Teacher Barbenes',
			duration: 4,
			difficulty: 4,
			course_id: 4,
		},
	]

	const lesson = {
		id: 1,
		name: 'Lesson ESL1-1',
		author: 'Barbenes',
		duration: 1,
		difficulty: 1,
		course_id: 1,
		completed: 0,
		quizs: [
			{
				id: 1,
				name: 'Quiz ESL English',
				lesson_id: 1,
			},
			{
				id: 2,
				name: 'Quiz 2 ESL English',
				lesson_id: 2,
			},
		],
		wikidatas: [
			{
				id: 1,
				title: 'Wikidata 1',
				description: 'Wikidata Description1',
				lesson_id: 1,
				wikipicture: [
					{
						id: 1,
						description: 'Picure 1',
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFcAgfiF4wsowNxBzNU-5ql0Bhe6GzBfpoQ&usqp=CAU',
						wikidata_id: 1,
					},
					{
						id: 2,
						description: 'Picure 2',
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFcAgfiF4wsowNxBzNU-5ql0Bhe6GzBfpoQ&usqp=CAU',
						wikidata_id: 1,
					},
				],
				wikivideo: [
					{
						id: 1,
						description: 'Video 1',
						url: 'https://www.w3schools.com/html/mov_bbb.mp4',
						wikidata_id: 1,
					},
					{
						id: 2,
						description: 'Video 2',
						url: 'https://www.w3schools.com/html/mov_bbb.mp4',
						wikidata_id: 1,
					},
				],
			},
			{
				id: 2,
				title: 'Wikidata 2',
				description: 'Wikidata Description 2',
				lesson_id: 1,
				wikipicture: [
					{
						id: 3,
						description: 'Picure 3',
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFcAgfiF4wsowNxBzNU-5ql0Bhe6GzBfpoQ&usqp=CAU',
						wikidata_id: 2,
					},
					{
						id: 4,
						description: 'Picure 4',
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFcAgfiF4wsowNxBzNU-5ql0Bhe6GzBfpoQ&usqp=CAU',
						wikidata_id: 2,
					},
				],
				wikivideo: [
					{
						id: 3,
						description: 'Video 3',
						url: 'https://www.w3schools.com/html/mov_bbb.mp4',
						wikidata_id: 2,
					},
					{
						id: 4,
						description: 'Video 4',
						url: 'https://www.w3schools.com/html/mov_bbb.mp4',
						wikidata_id: 2,
					},
				],
			},
		],
	}

	return (
		<div>
			<PageHeader
				className='site-page-header'
				onBack={() => navigate(-1)}
				title='Lesson'
				subTitle='Lesson Summary'
			/>
			<div
				style={{
					margin: '1rem 1rem 1rem 1.5rem',
				}}>
				<div className='quiz_title'>
					<Title level={3}>{lesson.name}</Title>
				</div>
				<div className='quiz_content'>
					<LessonContent lesson={lesson} lessons={lessons} />
				</div>
			</div>
		</div>
	)
}
export default LessonPage

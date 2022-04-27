import { Card, PageHeader } from 'antd'
import LessonContent from 'components/lessonContent/LessonContent'
import useTitle from 'hooks/useTitle'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

const LessonPage = () => {
	const navigate = useNavigate()
	const urlParams = useParams()
	const lessonID = urlParams?.lessonID
	useTitle(`Lesson ${lessonID}`)

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
				title: 'Part 1',
				description: `<p>This tutorial will be the fourtenth in the Linux for hackers series and will focus on the MySQL database. Although this is not strictly a Linux tutorial, MySQL is the database of choice on most Linux distributions. In addition, it is the most widely used database behind database driven web applications. This installment is critical to understand before we progress to hacking MySQL databases and before we hack web applications that use MySQL (which there are literally thousands).</p>
				<p>Luckily, BackTrack has MySQL already installed (if you are using another distribution, you can usually download and install MySQL from the software repository) and has a graphical start and stop. Let's start our MySQL service.</p>
				</div></div></figure></figure> <p>When we do so, we should see a screen like that below pop up briefly and then disappear.</p> <figure><figure class="whtGallery pad-2" id="49976148docPartGal880007" role="group"><div class="gallery-layout"><div class="gallery-layout-container"><figure class="gal-mgb" data-index="0"><img src="https://img.wonderhowto.com/img/31/58/63524355438197/0/hack-like-pro-linux-basics-for-aspiring-hacker-part-14-mysql.w1456.jpg" alt="Hack Like a Pro: Linux Basics for the Aspiring Hacker, Part 14 (MySQL)" width="532" height="532" style="max-width:532px;height:auto;"/></figure></div></div></figure></figure> 
				`,
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
				title: 'Part 2',
				description: `<p>Now that our MySQL service is started, we can begin to use it. First, we need to authenticate ourselves by logging in.</p><p>Open a terminal and type:</p>
				<code>mysql -u root -p</code><br/><br/>`,
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
			<Card
				bordered={false}
				className='card_lesson_main'
				style={{ marginLeft: '1rem', marginRight: '1rem', marginBottom: '1rem', paddingTop: '0.5rem' }}>
				<LessonContent lesson={lesson} lessons={lessons} />
			</Card>
		</div>
	)
}
export default LessonPage

import { CheckSquareOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Col, Row, Statistic, Tooltip, Typography, Image, Card } from 'antd'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import './style.css'

interface Quiz {
	id: number
	name: string
	lesson_id: number
}

type Quizs = Quiz[]

interface Picture {
	id: number
	description: string
	url: string
	wikidata_id: number
}

interface Video {
	id: number
	description: string
	url: string
	wikidata_id: number
}

interface Wikidata {
	id: number
	title: string
	description: string
	lesson_id: number
	wikipicture: Picture[]
	wikivideo: Video[]
}

type Wikidatas = Wikidata[]

type Lessons = LessonLight[]

interface LessonLight {
	id: number
	name: string
	author: string
	duration: number
	difficulty: number
	course_id: number
}

interface Lesson {
	id: number
	name: string
	author: string
	duration: number
	difficulty: number
	course_id: number
	course_name: string
	completed: number
	quizs: Quizs
	wikidatas: Wikidatas
}

interface props {
	lesson: Lesson
	lessons: Lessons
}

interface pictureDetails {
	id: number
	description: string
	url: string
}

interface videoDetails {
	id: number
	description: string
	url: string
}

const LessonContent = ({ lesson, lessons }: props) => {
	const { Title } = Typography
	const navigate = useNavigate()

	const hasPreviousLesson = (lesson: Lesson, lessons: Lessons): boolean => {
		return lessons.some((_lesson) => _lesson.id === lesson.id - 1)
	}

	const hasNextLesson = (lesson: Lesson, lessons: Lessons): boolean => {
		return lessons.some((_lesson) => _lesson.id === lesson.id + 1)
	}

	const handleClickPrevious = (lesson: Lesson, lessons: Lessons) => {
		if (hasPreviousLesson(lesson, lessons)) {
			navigate(`/auth/lesson/${lesson.id - 1}`)
		}
		navigate(`/auth/course/${lesson.course_id}`)
	}

	const handleClickNext = (lesson: Lesson, lessons: Lessons) => {
		if (hasNextLesson(lesson, lessons)) {
			navigate(`/auth/lesson/${lesson.id + 1}`)
		}
		navigate(`/auth/course/${lesson.course_id}`)
	}

	return (
		<>
			<Row className='mt1'>
				<Col span={22}>
					<div className='ant-statistic-title'>LESSON</div>
				</Col>
				<Col span={1} offset={1} style={{ justifyContent: 'center', display: 'flex' }}>
					<Tooltip title={`${lesson.name} completed`}>
						{lesson.completed === 100 && <CheckSquareOutlined className='checkedLesson' />}
					</Tooltip>
				</Col>
			</Row>
			<Row>
				<Col>
					<Title level={4}>{lesson.name}</Title>
				</Col>
			</Row>

			<Row className='mt1' style={{ marginBottom: '1rem' }}>
				<Col span={3}>
					<Link to={`/auth/lesson/${lesson.course_id}`}>
						<Statistic
							className='stat_related'
							title='Related to'
							value={lesson.course_name}
							valueStyle={{ color: '#1890ff' }}
						/>
					</Link>
				</Col>
				<Col span={3}>
					<Statistic className='stat_course_lower_teacher' title='Teacher' value={lesson.author} />
				</Col>
				<Col span={3}>
					<Statistic className='stat_course_lower' title='Duration' value={lesson.duration} suffix='h' />
				</Col>
				<Col span={3}>
					<Statistic
						className='stat_course_lower'
						title='Difficulty'
						value={lesson.difficulty}
						suffix='/10'
					/>
				</Col>
			</Row>

			{lesson.wikidatas.map((wikidata, count) => {
				let pictureDetails: pictureDetails = { id: 0, description: '', url: '' }
				let videoDetails: videoDetails = { id: 0, description: '', url: '' }
				count++

				wikidata.wikipicture.forEach((picture) => {
					if (picture.wikidata_id === wikidata.id) {
						pictureDetails = {
							id: picture.id,
							description: picture.description,
							url: picture.url,
						}
					}
				})
				wikidata.wikivideo.forEach((video) => {
					if (video.wikidata_id === wikidata.id) {
						videoDetails = {
							id: video.id,
							description: video.description,
							url: video.url,
						}
					}
				})
				return (
					<Card key={count} bordered={true} className='card_lesson_content'>
						<Row>
							<Col>
								<Title level={3}>{wikidata.title}</Title>
							</Col>
						</Row>
						<Row className='row_wikidata'>
							<Col>
								<div dangerouslySetInnerHTML={{ __html: wikidata.description }} />
							</Col>
						</Row>

						{pictureDetails.id !== 0 && (
							<Row>
								<Col>
									<Image width={200} src={pictureDetails.url} alt={pictureDetails.description} />
								</Col>
							</Row>
						)}
						{videoDetails.id !== 0 && (
							<Row>
								<Col>
									<video width='320' height='240' controls>
										<source src={videoDetails.url} type='video/mp4' />
										Your browser does not support the video tag.
									</video>
								</Col>
							</Row>
						)}
					</Card>
				)
			})}

			<Row>
				<Col span={8} className='btn_quiz_col'>
					<Button className='btn_quiz' onClick={() => handleClickPrevious(lesson, lessons)}>
						<LeftOutlined />
						Previous
					</Button>
				</Col>
				<Col
					span={8}
					offset={8}
					style={{ display: 'flex', justifyContent: 'flex-end' }}
					className='btn_quiz_col'>
					<Button className='btn_quiz' onClick={() => handleClickNext(lesson, lessons)}>
						Next
						<RightOutlined />
					</Button>
				</Col>
			</Row>
		</>
	)
}

export default LessonContent

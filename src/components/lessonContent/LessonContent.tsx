import { BorderOutlined, CheckSquareOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Row, Statistic, Tooltip, Typography, Image } from 'antd'
import { useNavigate } from 'react-router'

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
	const { Text, Title } = Typography
	const navigate = useNavigate()

	return (
		<div className='container_quiz'>
			<Row className='center title_row'>
				<Col>
					<Title level={3}>{lesson.name}</Title>
				</Col>
				{lesson.completed === 100 && (
					<Col style={{ marginLeft: '1rem', marginBottom: '.4rem', transform: 'scale(0.75)' }}>
						<Tooltip title={`${lesson.name} completed`}>
							<CheckSquareOutlined className='checkedLesson' />
						</Tooltip>
					</Col>
				)}
			</Row>

			<Row className='center mt1'>
				<Col span={8} className='center'>
					<Statistic title='Teacher' value={lesson.author} prefix='Teacher' />
				</Col>
				<Col span={8} className='center'>
					<Statistic title='Duration' value={lesson.duration} suffix='h' />
				</Col>
				<Col span={8} className='center'>
					<Statistic title='Difficulty' value={lesson.difficulty} suffix='/10' />
				</Col>
			</Row>
			<Divider dashed />

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
					<div key={count} className='lesson_container'>
						<Row>
							<Col>
								<Title level={4}>{wikidata.title}</Title>
							</Col>
						</Row>
						<Row>
							<Col>{wikidata.description}</Col>
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
					</div>
				)
			})}
		</div>
	)
}

export default LessonContent

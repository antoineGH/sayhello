import { BorderOutlined, CheckSquareOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Row, Statistic, Tooltip, Typography } from 'antd'
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
}

const LessonContent = ({ lesson }: props) => {
	const { Text, Title } = Typography
	const navigate = useNavigate()
	console.log(lesson)

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
				count++
				return (
					<div key={count} className='lesson_container'>
						<Row>
							<Col
								style={{
									justifyContent: 'center',
									display: 'flex',
									marginTop: '0.15rem',
									marginLeft: '-0.2rem',
									marginRight: '0.2rem',
									transform: 'scale(0.75)',
								}}></Col>
							<Col>
								<Title level={4}>{wikidata.title}</Title>
							</Col>
						</Row>
						<Row>
							<Col>{wikidata.description}</Col>
						</Row>
					</div>
				)
			})}
		</div>
	)
}

export default LessonContent

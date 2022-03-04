import { BorderOutlined, CheckSquareOutlined, TrophyOutlined } from '@ant-design/icons'
import { Button, Col, Row, Statistic, Tooltip, Typography } from 'antd'
import { Link } from 'react-router-dom'

interface Props {
	quizID: number
	quizName: string
	lessonID: number
	lessonName: string
	difficulty: number
	numberQuestion: number
	score: number
	handleQuiz: (quizID: number) => void
}

const QuizSummary = ({
	quizID,
	quizName,
	lessonID,
	lessonName,
	difficulty,
	numberQuestion,
	score,
	handleQuiz,
}: Props) => {
	const { Title } = Typography
	return (
		<>
			<Row>
				<Col span={1}>
					<Title level={4}>{quizName}</Title>
				</Col>
				{score !== -1 ? (
					<Col>
						<Tooltip title={`Completed, Score ${score}/100`}>
							<TrophyOutlined style={{ color: 'gold', fontSize: '1.2rem', marginTop: '.2rem' }} />
						</Tooltip>
					</Col>
				) : (
					''
				)}
			</Row>
			<Row>
				<Col span={1} offset={23} style={{ justifyContent: 'center', display: 'flex' }}>
					<Tooltip title={score !== 0 ? `${quizName} completed` : `${quizName} not completed`}>
						{score !== -1 ? (
							<CheckSquareOutlined className='checkedLesson' />
						) : (
							<BorderOutlined className='uncheckedLesson' />
						)}
					</Tooltip>
				</Col>
			</Row>
			<Row style={{ marginTop: '1rem' }}>
				<Col span={4}>
					<Link to={`/auth/lesson/${lessonID}`}>
						<Statistic title='Related to' value={lessonName} valueStyle={{ color: '#1890ff' }} />
					</Link>
				</Col>
				<Col span={4}>
					<Statistic title='Contains' value={numberQuestion} suffix='Questions' />
				</Col>
				<Col span={4}>
					<Statistic title='Difficulty' value={difficulty} suffix='/10' />
				</Col>
				<Col span={1} offset={11} style={{ justifyContent: 'center', display: 'flex' }}>
					<Button style={{ marginTop: '1rem' }} disabled={score !== -1} onClick={() => handleQuiz(quizID)}>
						{score !== -1 ? 'Completed' : 'Take Quiz'}
					</Button>
				</Col>
			</Row>
		</>
	)
}

export default QuizSummary

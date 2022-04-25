import { CheckSquareOutlined, TrophyOutlined } from '@ant-design/icons'
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
				<Col>
					<div className='ant-statistic-title'>QUIZ</div>
				</Col>
				{score !== -1 ? (
					<Col span={1}>
						<Tooltip title={`Completed: Score ${score}%`}>
							<TrophyOutlined style={{ color: 'gold', fontSize: '1.1rem', marginLeft: '0.3rem' }} />
						</Tooltip>
					</Col>
				) : (
					''
				)}
				<Col span={1} offset={21} style={{ justifyContent: 'center', display: 'flex' }}>
					<Tooltip title={score !== 0 ? `${quizName} completed` : `${quizName} not completed`}>
						{score !== -1 && <CheckSquareOutlined className='checkedLesson' />}
					</Tooltip>
				</Col>
			</Row>
			<Row>
				<Col span={2}>
					<Title level={4}>{quizName}</Title>
				</Col>
			</Row>
			<Row></Row>
			<Row>
				<Col span={4}>
					<Link to={`/auth/lesson/${lessonID}`}>
						<Statistic
							className='stat_related'
							title='Related to'
							value={lessonName}
							valueStyle={{ color: '#1890ff' }}
						/>
					</Link>
				</Col>
				<Col span={4}>
					<Statistic
						className='stat_course_lower'
						title='Contains'
						value={numberQuestion}
						suffix='Questions'
					/>
				</Col>
				<Col span={4}>
					<Statistic className='stat_course_lower' title='Difficulty' value={difficulty} suffix='/10' />
				</Col>
				<Col span={2} offset={10} className='col_course_summary_btn'>
					<Button
						className={score !== -1 ? 'btn_disabled' : ''}
						style={{ marginTop: '1rem' }}
						disabled={score !== -1}
						onClick={() => handleQuiz(quizID)}>
						{score !== -1 ? 'Completed' : 'Take Quiz'}
					</Button>
				</Col>
			</Row>
		</>
	)
}

export default QuizSummary

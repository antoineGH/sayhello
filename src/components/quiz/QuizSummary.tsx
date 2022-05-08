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
				<Col span={22}>
					<Row>
						<Col>
							<div className='ant-statistic-title'>QUIZ</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<Title level={4}>{quizName}</Title>
						</Col>
						{score !== -1 ? (
							<Col span={1}>
								<Tooltip title={`Completed: Score ${score}%`}>
									<div className='circle'>
										<TrophyOutlined className='trophy_elem' />
									</div>
								</Tooltip>
							</Col>
						) : (
							''
						)}
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
							<Statistic
								className='stat_course_lower'
								title='Difficulty'
								value={difficulty}
								suffix='/10'
							/>
						</Col>
					</Row>
				</Col>
				<Col
					span={2}
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
					}}
					className='btn_quiz_col'>
					{score !== -1 ? (
						<div>
							<Button disabled className='btn_disabled'>
								Completed
							</Button>
						</div>
					) : (
						<Button className='btn_quiz' onClick={() => handleQuiz(quizID)}>
							Take Quiz
						</Button>
					)}
				</Col>
			</Row>
		</>
	)
}

export default QuizSummary

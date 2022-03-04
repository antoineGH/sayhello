import { Card, Typography } from 'antd'
import QuizSummary from 'components/quiz/QuizSummary'
import { useNavigate } from 'react-router'

const QuizCatalog = () => {
	const { Title } = Typography
	const navigate = useNavigate()
	const quizzes = [
		{
			quizID: 1,
			quizName: 'Quiz 1',
			lessonID: 1,
			lessonName: 'Lesson 1',
			difficulty: 2,
			numberQuestion: 10,
			score: 50,
		},
		{
			quizID: 2,
			quizName: 'Quiz 2',
			lessonID: 2,
			lessonName: 'Lesson 2',
			difficulty: 3,
			numberQuestion: 20,
			score: 90,
		},
		{
			quizID: 3,
			quizName: 'Quiz 3',
			lessonID: 3,
			lessonName: 'Lesson 3',
			difficulty: 9,
			numberQuestion: 30,
			score: -1,
		},
		{
			quizID: 4,
			quizName: 'Quiz 4',
			lessonID: 4,
			lessonName: 'Lesson 4',
			difficulty: 6,
			numberQuestion: 40,
			score: -1,
		},
	]

	const handleTakeQuiz = (quizID: number) => {
		console.log('handleTakeQuiz')
		navigate(`/auth/quiz/${quizID}`)
	}

	return (
		<>
			<div className='quiz_title'>
				<Title level={3}>Available Quizzes</Title>
			</div>
			{quizzes.map((quiz, count) => {
				count++
				return (
					<Card key={count} bordered={false} style={{ marginBottom: '1rem' }}>
						<QuizSummary
							quizID={quiz.quizID}
							quizName={quiz.quizName}
							lessonName={quiz.lessonName}
							lessonID={quiz.lessonID}
							difficulty={quiz.difficulty}
							numberQuestion={quiz.numberQuestion}
							score={quiz.score}
							handleQuiz={handleTakeQuiz}
						/>
					</Card>
				)
			})}
		</>
	)
}

export default QuizCatalog

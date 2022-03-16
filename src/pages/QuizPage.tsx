import { PageHeader, Typography } from 'antd'
import QuizContent from 'components/quizContent/QuizContent'
import { useNavigate, useParams } from 'react-router'

const QuizPage = () => {
	const navigate = useNavigate()
	const urlParams = useParams()
	const quizID = urlParams?.quizID
	const { Title } = Typography

	const quiz = {
		id: 1,
		name: 'Quiz ESL English',
		lesson_id: 1,
	}

	const questions = [
		{
			id: 1,
			question: 'Answer 2+2 = ... ?',
			quiz_id: 1,
			options: [
				{
					id: 1,
					option: '2',
					correctness: false,
					question_id: 1,
				},
				{
					id: 2,
					option: '4',
					correctness: true,
					question_id: 1,
				},
				{
					id: 3,
					option: '6',
					correctness: false,
					question_id: 1,
				},
				{
					id: 4,
					option: '8',
					correctness: false,
					question_id: 1,
				},
			],
		},
		{
			id: 2,
			question: 'Answer 4+4 = ... ?',
			quiz_id: 1,
			options: [
				{
					id: 5,
					option: '2',
					correctness: false,
					question_id: 2,
				},
				{
					id: 6,
					option: '4',
					correctness: false,
					question_id: 2,
				},
				{
					id: 7,
					option: '6',
					correctness: false,
					question_id: 2,
				},
				{
					id: 8,
					option: '8',
					correctness: true,
					question_id: 2,
				},
			],
		},
		{
			id: 3,
			question: 'Answer 8+8 = ... ?',
			quiz_id: 1,
			options: [
				{
					id: 5,
					option: '2',
					correctness: false,
					question_id: 2,
				},
				{
					id: 6,
					option: '4',
					correctness: false,
					question_id: 2,
				},
				{
					id: 7,
					option: '6',
					correctness: false,
					question_id: 2,
				},
				{
					id: 8,
					option: '8',
					correctness: true,
					question_id: 2,
				},
			],
		},
	]

	return (
		<div>
			<PageHeader
				className='site-page-header'
				onBack={() => navigate(-1)}
				title='Quiz'
				subTitle='Take your quiz'
			/>
			<div
				style={{
					margin: '1rem 1rem 1rem 1.5rem',
				}}>
				<div className='quiz_title'>
					<Title level={3}>{quiz.name}</Title>
				</div>
				<div className='quiz_content'>
					<QuizContent questions={questions} />
				</div>
			</div>
		</div>
	)
}

export default QuizPage

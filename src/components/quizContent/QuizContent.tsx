import { Button, Progress, Typography } from 'antd'
import { useEffect, useState } from 'react'

export type Questions = Question[]

export interface Question {
	id: number
	question: string
	quiz_id: number
	options: Option[]
}

export interface Option {
	id: number
	option: string
	correctness: boolean
	question_id: number
}

interface props {
	questions: Questions
}

const QuizContent = ({ questions }: props) => {
	const { Text } = Typography
	const [index, setIndex] = useState(0)
	const [progress, setProgress] = useState(0)
	const [question, setQuestion] = useState(questions[index])
	const [answers, setAnswers] = useState(new Array(questions.length))

	const getPercentageCompletion = () => {
		return Number(((index / (questions.length - 1)) * 100).toFixed(0))
	}

	useEffect(() => {
		setProgress(() => getPercentageCompletion())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index])

	const handleClickPreviousQuestion = () => {
		setQuestion(questions[index - 1])
		setIndex(index - 1)
		console.log('handleClickPreviousQuestion')
	}

	const handleClickNextQuestion = () => {
		if (index + 1 >= questions.length) {
			return
		}
		setQuestion(questions[index + 1])
		setIndex(index + 1)
		console.log('handleClickNextQuestion')
	}

	const handleAnswerQuestion = (correctness: Boolean) => {
		if (typeof answers[index] === 'boolean') {
			console.log('You already answered this question')
			return
		}
		let newAnswers = [...answers]
		newAnswers[index] = correctness
		setAnswers(newAnswers)
	}

	return (
		<>
			{String(index)}
			{question.question}

			<Progress percent={progress} status='active' />
			<Button disabled={question === questions[0]} onClick={() => handleClickPreviousQuestion()}>
				Previous
			</Button>
			<Text>
				Question {index + 1} / {questions.length}
			</Text>
			{question.options.map((option, count) => {
				count++
				return (
					<Button
						key={option.id}
						disabled={typeof answers[index] === 'boolean'}
						onClick={() => handleAnswerQuestion(option.correctness)}>
						{String.fromCharCode(count + 96)}. {option.option}
					</Button>
				)
			})}
			<Button onClick={() => handleClickNextQuestion()}>Next</Button>
		</>
	)
}

export default QuizContent

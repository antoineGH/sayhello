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
	const [readySubmit, setReadySubmit] = useState(false)

	const getPercentageCompletion = () => {
		return Number(((index / (questions.length - 1)) * 100).toFixed(0))
	}

	useEffect(() => {
		let flagReady = true
		answers.forEach((answer) => {
			if (typeof answer !== 'boolean') {
				flagReady = false
			}
		})
		if (flagReady) {
			// Should return false but turns to true for off reasons
			setReadySubmit(true)
		}
	}, [answers])

	useEffect(() => {
		setProgress(() => getPercentageCompletion())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index])

	const handleClickPreviousQuestion = () => {
		setQuestion(questions[index - 1])
		setIndex(index - 1)
	}

	const handleClickNextQuestion = () => {
		setQuestion(questions[index + 1])
		setIndex(index + 1)
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

	const isPreviousDisabled = () => {
		return question === questions[0]
	}

	const isNextDisabled = () => {
		return index + 1 >= questions.length
	}

	const handleSubmit = () => {
		console.log('handleSubmit')
		console.log(answers)
	}

	return (
		<>
			{String(index)}
			{question.question}

			<Progress percent={progress} status='active' />
			<Button disabled={isPreviousDisabled()} onClick={() => handleClickPreviousQuestion()}>
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
			<Button disabled={isNextDisabled()} onClick={() => handleClickNextQuestion()}>
				Next
			</Button>
			<Button disabled={readySubmit} onClick={handleSubmit}>
				Submit
			</Button>
			{String(readySubmit)}
		</>
	)
}

export default QuizContent

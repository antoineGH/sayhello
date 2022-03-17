import { useEffect, useState } from 'react'
import { Button, Col, Progress, Row, Typography } from 'antd'
import './style.css'

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
	const { Text, Title } = Typography
	const [index, setIndex] = useState(0)
	const [progress, setProgress] = useState(0)
	const [question, setQuestion] = useState(questions[index])
	const [answers, setAnswers] = useState(Array(questions.length).fill(null))
	const [readySubmit, setReadySubmit] = useState(false)

	const getPercentageCompletion = () => {
		return Number(((index / (questions.length - 1)) * 100).toFixed(0))
	}

	useEffect(() => {
		if (answers.every((answer) => typeof answer === 'boolean')) {
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
		<div className='container_quiz'>
			<Row className='center title_row'>
				<Col>
					<Title level={5}>{question.question}</Title>
				</Col>
			</Row>
			<Row className='center'>
				<Col>
					{question.options.map((option, count) => {
						count++
						return (
							<Row key={option.id} className='row_answers'>
								<Button
									className='button_quiz'
									disabled={typeof answers[index] === 'boolean'}
									onClick={() => handleAnswerQuestion(option.correctness)}>
									<span style={{ fontWeight: 'bold', marginRight: '.4rem' }}>
										{String.fromCharCode(count + 96)}.
									</span>
									{option.option}
								</Button>
							</Row>
						)
					})}
				</Col>
			</Row>
			<Row className='progress_row'>
				<Progress percent={progress} status='active' />
			</Row>
			<Row className='center space_col'>
				<Col>
					<Button disabled={isPreviousDisabled()} onClick={() => handleClickPreviousQuestion()}>
						Previous
					</Button>
				</Col>
				<Col>
					<Text>
						Question {index + 1} / {questions.length}
					</Text>
				</Col>
				<Col>
					<Button disabled={isNextDisabled()} onClick={() => handleClickNextQuestion()}>
						Next
					</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					{readySubmit && (
						<Button disabled={!readySubmit} onClick={handleSubmit}>
							Submit
						</Button>
					)}
				</Col>
			</Row>
		</div>
	)
}

export default QuizContent

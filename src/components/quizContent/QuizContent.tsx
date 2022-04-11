import { useEffect, useState } from 'react'
import { Button, Col, Progress, Row, Tooltip, Typography } from 'antd'
import './style.css'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

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
	const [choices, setChoices] = useState(Array(questions.length).fill(null))
	const [readySubmit, setReadySubmit] = useState(false)

	useEffect(() => {
		console.log(questionUnAnswered())
	}, [answers])

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

	const handleAnswerQuestion = (correctness: Boolean, count: number) => {
		if (typeof answers[index] === 'boolean') {
			console.log('You already answered this question')
			return
		}
		let newAnswers = [...answers]
		newAnswers[index] = correctness
		setAnswers(newAnswers)
		let newChoices = [...choices]
		newChoices[index] = count
		setChoices(newChoices)
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

	const hasAnswered = () => {
		return typeof answers[index] === 'boolean'
	}

	const questionUnAnswered = (): String => {
		let unAnswered = 'Missing question '
		if (Object.keys(answers).length >= 1) {
			unAnswered = unAnswered.replace('question', 'questions')
		}
		Object.entries(answers).forEach(([key, value]) => {
			if (typeof value !== 'boolean') {
				unAnswered += String(Number(key) + 1)
			}
			if (Object.keys(answers).length === Number(key) + 1) {
				unAnswered += '.'
			} else {
				unAnswered += ', '
			}
		})
		return unAnswered
	}

	const getClassNameButton = (correctness: Boolean, count: number) => {
		let className = 'button_quiz'
		if (hasAnswered()) {
			if (correctness) {
				className = `${className} border_green`
				if (count === choices[index]) {
					className = `${className} bg_green`
				}
			} else {
				className = `${className} border_red`
				if (count === choices[index]) {
					className = `${className} bg_red`
				}
			}
		}
		return className
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
									className={getClassNameButton(option.correctness, count)}
									disabled={hasAnswered()}
									type='dashed'
									onClick={() => handleAnswerQuestion(option.correctness, count)}>
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
			<Row className='center'>
				<Col span={8} style={{ display: 'flex', justifyContent: 'start' }}>
					<Button disabled={isPreviousDisabled()} onClick={() => handleClickPreviousQuestion()}>
						<LeftOutlined />
						Previous
					</Button>
				</Col>
				<Col span={8} style={{ display: 'flex', justifyContent: 'center' }}>
					<Text>
						Question {index + 1} / {questions.length}
					</Text>
				</Col>
				<Col span={8} style={{ display: 'flex', justifyContent: 'end' }}>
					<Button disabled={isNextDisabled()} onClick={() => handleClickNextQuestion()}>
						Next
						<RightOutlined />
					</Button>
				</Col>
			</Row>
			<Row className='center row_submit'>
				<Col>
					<Tooltip title={questionUnAnswered()}>
						<Button disabled={!readySubmit} onClick={handleSubmit}>
							Submit
						</Button>
					</Tooltip>
				</Col>
			</Row>
		</div>
	)
}

export default QuizContent

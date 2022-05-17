import { useEffect, useState } from 'react'
import { QuizContentProps } from 'types/quiz'
import {
  Button,
  Col,
  Progress,
  Row,
  Statistic,
  Tooltip,
  Typography
} from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './style.css'

const QuizContent = ({ questions }: QuizContentProps) => {
  const { Title } = Typography
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [question, setQuestion] = useState(questions[index])
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))
  const [choices, setChoices] = useState(Array(questions.length).fill(null))
  const [readySubmit, setReadySubmit] = useState(false)

  const getPercentageCompletion = () => {
    return Number(((index / (questions.length - 1)) * 100).toFixed(0))
  }

  useEffect(() => {
    if (answers.every(answer => typeof answer === 'boolean')) {
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
    // if (Object.every(anwsers).forEach(answer => {typeof answer ==='boolean'}))){
    let readySubmit = true
    Object.entries(answers).forEach(([key, value]) => {
      if (typeof value !== 'boolean') {
        readySubmit = false
      }
    })
    if (readySubmit) {
      return 'Ready to submit'
    }

    let unAnswered = 'Missing question '
    Object.entries(answers).forEach(([key, value]) => {
      if (typeof value !== 'boolean') {
        unAnswered += String(Number(key) + 1)
      }
      if (Object.keys(answers).length !== Number(key) + 1) {
        if (typeof value !== 'boolean') {
          unAnswered += ', '
        }
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
        if (count === choices[index]) {
          className = `${className} bg_red`
        }
      }
    }
    return className
  }

  return (
    <div className="container_quiz">
      <Row className="center title_row">
        <Col>
          <Title level={5}>{question.question}</Title>
        </Col>
      </Row>
      <Row className="center">
        <Col>
          {question.options.map((option, count) => {
            count++
            return (
              <Row key={option.id} className="row_answers">
                <Button
                  className={getClassNameButton(option.correctness, count)}
                  disabled={hasAnswered()}
                  onClick={() =>
                    handleAnswerQuestion(option.correctness, count)
                  }
                >
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
      <Row className="progress_row">
        <Progress
          strokeColor="#ffd300"
          percent={progress}
          status="active"
          showInfo={false}
        />
      </Row>
      <Row className="center navigation_quiz_row">
        <Col
          className="btn_quiz_col"
          span={8}
          style={{ display: 'flex', justifyContent: 'start' }}
        >
          <Button
            className="btn_quiz"
            disabled={isPreviousDisabled()}
            onClick={() => handleClickPreviousQuestion()}
          >
            <LeftOutlined />
            Previous
          </Button>
        </Col>

        <Col span={8} style={{ display: 'flex', justifyContent: 'center' }}>
          <Statistic
            className="stat_course_lower stat_quiz"
            title="Question"
            value={index + 1}
            suffix={'/' + questions.length}
          />
        </Col>
        <Col
          className="btn_quiz_col"
          span={8}
          style={{ display: 'flex', justifyContent: 'end' }}
        >
          <Button
            className="btn_quiz"
            disabled={isNextDisabled()}
            onClick={() => handleClickNextQuestion()}
          >
            Next
            <RightOutlined />
          </Button>
        </Col>
      </Row>
      <Tooltip title={questionUnAnswered()}>
        <Row className="center row_submit">
          <Col className="btn_quiz_col">
            <Button
              className="btn_quiz"
              disabled={!readySubmit}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Tooltip>
    </div>
  )
}

export default QuizContent

import { QuizSummaryProps } from 'types/quiz'
import { Button, Col, Row, Statistic, Tooltip, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { TrophyOutlined } from '@ant-design/icons'

const QuizSummary = ({
  quizID,
  quizName,
  lessonID,
  lessonName,
  difficulty,
  numberQuestion,
  score,
  handleQuiz
}: QuizSummaryProps) => {
  const { Title } = Typography
  return (
    <>
      <Row>
        <Col xs={24} sm={20}>
          <Row>
            <Col>
              <div className="ant-statistic-title">QUIZ</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Title level={4}>{quizName}</Title>
            </Col>
            {score !== -1 ? (
              <Col xs={3} md={2} lg={1}>
                <Tooltip title={`Completed: Score ${score}%`}>
                  <div className="circle">
                    <TrophyOutlined className="trophy_elem" />
                  </div>
                </Tooltip>
              </Col>
            ) : (
              ''
            )}
          </Row>
          <Row className="row_statistic_lesson" gutter={[0, 8]}>
            <Col xs={{ span: 12, order: 4 }} sm={8} md={6} lg={4}>
              <Link to={`/auth/lesson/${lessonID}`}>
                <Statistic
                  className="stat_related"
                  title="Related to"
                  value={lessonName}
                  valueStyle={{ color: '#1890ff' }}
                />
              </Link>
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
              <Statistic
                className="stat_course_lower"
                title="Contains"
                value={numberQuestion}
                suffix="Questions"
              />
            </Col>
            <Col xs={12} sm={8} md={6} lg={4}>
              <Statistic
                className="stat_course_lower"
                title="Difficulty"
                value={difficulty}
                suffix="/10"
              />
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={4} className="btn_quiz_col">
          {score !== -1 ? (
            <div>
              <Button
                disabled
                className="btn_disabled"
                style={{ marginTop: '1rem' }}
              >
                Completed
              </Button>
            </div>
          ) : (
            <Button
              className="btn_quiz"
              onClick={() => handleQuiz(quizID)}
              style={{ marginTop: '1rem' }}
            >
              Take Quiz
            </Button>
          )}
        </Col>
      </Row>
    </>
  )
}

export default QuizSummary

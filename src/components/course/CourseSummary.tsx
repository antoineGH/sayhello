import { CourseSummaryProps } from 'types/course'
import {
  Button,
  Col,
  Progress,
  Row,
  Statistic,
  Tag,
  Tooltip,
  Typography
} from 'antd'
import { TrophyOutlined } from '@ant-design/icons'

const CourseSummary = ({
  id,
  name,
  duration,
  difficulty,
  completed,
  numberLesson,
  numberQuiz,
  tags,
  handleCourse,
  isNotEnrolled
}: CourseSummaryProps) => {
  const { Title } = Typography

  const getContains = (numberLesson: number, numberQuiz: number) => {
    return ` lesson${numberLesson + numberQuiz > 1 ? 's' : ''}`
  }

  return (
    <>
      <Row>
        <Col xs={24} sm={20}>
          <Row>
            <Col>
              <div className="ant-statistic-title">COURSE</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Title level={4}>{name}</Title>
            </Col>
            {completed === 100 ? (
              <Col span={1} style={{ marginLeft: '.7rem' }}>
                <Tooltip title={`${name} Completed`}>
                  <div className="circle">
                    <TrophyOutlined className="trophy_elem" />
                  </div>
                </Tooltip>
              </Col>
            ) : (
              ''
            )}
          </Row>
          <Row>
            <Col span={24}>
              {tags.map(tag => {
                return (
                  <Tag className="tag_course" key={tag}>
                    {tag}
                  </Tag>
                )
              })}
            </Col>
          </Row>
          <Row>
            {!isNotEnrolled && (
              <Progress
                percent={completed}
                status="active"
                strokeColor="#ffd300"
                style={{ marginTop: '0.3rem' }}
              />
            )}
          </Row>
          <Row
            style={{ marginTop: '.5rem' }}
            className="row_statistic"
            gutter={[0, 8]}
          >
            <Col xs={12} sm={6} lg={4}>
              <Statistic
                className="stat_course_lower"
                title="Contains"
                value={numberLesson + numberQuiz}
                suffix={getContains(numberLesson, numberQuiz)}
              />
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Statistic
                className="stat_course_lower"
                title="Duration"
                value={duration}
                suffix="h"
              />
            </Col>
            <Col xs={12} sm={6} lg={4}>
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
          <Button
            className={
              completed === 100 ? 'btn_quiz btn_quiz_resume' : 'btn_quiz'
            }
            style={{ marginTop: '1rem' }}
            onClick={() => handleCourse(id)}
          >
            {completed ? 'Resume' : 'Enroll'}
          </Button>
        </Col>
      </Row>
    </>
  )
}
export default CourseSummary

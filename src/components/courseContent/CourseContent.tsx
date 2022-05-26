import { useNavigate } from 'react-router'
import LessonCard from 'components/lessonCard/LessonCard'
import { CourseContentProps } from 'types/course'
import { Col, Row, Statistic, Tag, Tooltip, Typography } from 'antd'
import { CheckSquareOutlined } from '@ant-design/icons'
import './style.css'

const CourseContent = ({ course, tags, lessons }: CourseContentProps) => {
  const { Title } = Typography
  const navigate = useNavigate()

  const getContains = (numberLesson: number, numberQuiz: number) => {
    return ` module${numberLesson + numberQuiz > 1 ? 's' : ''}`
  }

  const handleClickLesson = (lessonID: number) => {
    console.log('handleStartLesson')
    navigate(`/auth/lesson/${lessonID}`)
  }

  return (
    <>
      <Row>
        <Col span={22}>
          <div className="ant-statistic-title">COURSE</div>
        </Col>
        <Col
          span={1}
          offset={1}
          style={{ justifyContent: 'center', display: 'flex' }}
        >
          <Tooltip title={`${course.name} completed`}>
            {course.completed === 100 && (
              <CheckSquareOutlined className="checkedLesson" />
            )}
          </Tooltip>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title level={4}>{course.name}</Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {tags.map(tag => {
            return (
              <Tag key={tag} className="tag_course">
                {tag}
              </Tag>
            )
          })}
        </Col>
      </Row>

      <Row style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <Col xs={{ span: 24, order: 4 }} sm={8} md={6} lg={4}>
          <Statistic
            className="stat_course_lower"
            title="Contains"
            value={course.numberLesson + course.numberQuiz}
            suffix={getContains(course.numberLesson, course.numberQuiz)}
          />
        </Col>
        <Col xs={24} sm={8} md={6} lg={4}>
          <Statistic
            className="stat_course_lower"
            title="Duration"
            value={course.duration}
            suffix="h"
          />
        </Col>
        <Col xs={24} sm={8} md={6} lg={4}>
          <Statistic
            className="stat_course_lower"
            title="Difficulty"
            value={course.difficulty}
            suffix="/10"
          />
        </Col>
      </Row>
      <Row className="row_lesson">
        {lessons.map((lesson, count) => {
          count++
          return (
            <LessonCard
              key={lesson.id}
              handleClickLesson={handleClickLesson}
              lesson={lesson}
            />
          )
        })}
      </Row>
    </>
  )
}

export default CourseContent

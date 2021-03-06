import { useNavigate } from 'react-router'
import {
  Lesson,
  LessonContentProps,
  Lessons,
  pictureDetails,
  videoDetails
} from 'types/lesson'
import {
  Button,
  Card,
  Col,
  Image,
  Row,
  Statistic,
  Tooltip,
  Typography
} from 'antd'
import { Link } from 'react-router-dom'
import {
  CheckSquareOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons'
import './style.css'

const LessonContent = ({ lesson, lessons }: LessonContentProps) => {
  const { Title } = Typography
  const navigate = useNavigate()

  const hasPreviousLesson = (lesson: Lesson, lessons: Lessons): boolean => {
    return lessons.some(_lesson => _lesson.id === lesson.id - 1)
  }

  const hasNextLesson = (lesson: Lesson, lessons: Lessons): boolean => {
    return lessons.some(_lesson => _lesson.id === lesson.id + 1)
  }

  const handleClickPrevious = (lesson: Lesson, lessons: Lessons) => {
    if (hasPreviousLesson(lesson, lessons)) {
      navigate(`/auth/lesson/${lesson.id - 1}`)
    }
    navigate(`/auth/course/${lesson.course_id}`)
  }

  const handleClickNext = (lesson: Lesson, lessons: Lessons) => {
    if (hasNextLesson(lesson, lessons)) {
      navigate(`/auth/lesson/${lesson.id + 1}`)
    }
    navigate(`/auth/course/${lesson.course_id}`)
  }

  return (
    <>
      <Row className="mt1">
        <Col span={22}>
          <div className="ant-statistic-title">LESSON</div>
        </Col>
        <Col
          span={1}
          offset={1}
          style={{ justifyContent: 'center', display: 'flex' }}
        >
          <Tooltip title={`${lesson.name} completed`}>
            {lesson.completed === 100 && (
              <CheckSquareOutlined className="checkedLesson" />
            )}
          </Tooltip>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title level={4}>{lesson.name}</Title>
        </Col>
      </Row>

      <Row className="mt1" style={{ marginBottom: '1rem' }} gutter={[0, 8]}>
        <Col
          xs={{ span: 12, order: 3 }}
          sm={9}
          md={{ span: 6, order: 4 }}
          lg={4}
          xl={3}
        >
          <Link to={`/auth/lesson/${lesson.course_id}`}>
            <Statistic
              className="stat_related"
              title="Related to"
              value={lesson.course_name}
              valueStyle={{ color: '#1890ff' }}
            />
          </Link>
        </Col>
        <Col
          xs={{ span: 12, order: 4 }}
          sm={9}
          md={{ span: 6, order: 3 }}
          lg={4}
          xl={3}
        >
          <Statistic
            className="stat_course_lower_teacher"
            title="Teacher"
            value={lesson.author}
          />
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          sm={9}
          md={{ span: 6, order: 1 }}
          lg={4}
          xl={3}
        >
          <Statistic
            className="stat_course_lower"
            title="Duration"
            value={lesson.duration}
            suffix="h"
          />
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={9}
          md={{ span: 6, order: 1 }}
          lg={4}
          xl={3}
        >
          <Statistic
            className="stat_course_lower"
            title="Difficulty"
            value={lesson.difficulty}
            suffix="/10"
          />
        </Col>
      </Row>

      {lesson.wikidatas.map((wikidata, count) => {
        let pictureDetails: pictureDetails = { id: 0, description: '', url: '' }
        let videoDetails: videoDetails = { id: 0, description: '', url: '' }
        count++

        wikidata.wikipicture.forEach(picture => {
          if (picture.wikidata_id === wikidata.id) {
            pictureDetails = {
              id: picture.id,
              description: picture.description,
              url: picture.url
            }
          }
        })
        wikidata.wikivideo.forEach(video => {
          if (video.wikidata_id === wikidata.id) {
            videoDetails = {
              id: video.id,
              description: video.description,
              url: video.url
            }
          }
        })
        return (
          <Card key={count} bordered={true} className="card_lesson_content">
            <Row className="row_title">
              <Col xs={24} md={14} lg={11}>
                <div className="rectangle"></div>
                <div className="title">
                  <Title level={4}>{wikidata.title}</Title>
                </div>
              </Col>
            </Row>
            <Row className="row_wikidata">
              <Col className="col_content">
                <div
                  dangerouslySetInnerHTML={{ __html: wikidata.description }}
                />
              </Col>
            </Row>

            {pictureDetails.id !== 0 && (
              <Row>
                <Col>
                  <Image
                    width={200}
                    src={pictureDetails.url}
                    alt={pictureDetails.description}
                  />
                </Col>
              </Row>
            )}
            {videoDetails.id !== 0 && (
              <Row>
                <Col>
                  <video width="320" height="240" controls>
                    <source src={videoDetails.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Col>
              </Row>
            )}
          </Card>
        )
      })}

      <Row className="row_footer">
        <Col span={12} className="btn_quiz_col previous_arrow">
          <Button
            className="btn_quiz"
            onClick={() => handleClickPrevious(lesson, lessons)}
          >
            <LeftOutlined />
            Previous
          </Button>
        </Col>
        <Col
          span={12}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
          className="btn_quiz_col"
        >
          <Button
            className="btn_quiz"
            onClick={() => handleClickNext(lesson, lessons)}
          >
            Next
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default LessonContent

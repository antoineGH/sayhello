import { useNavigate } from 'react-router'
import CourseSummary from 'components/course/CourseSummary'
import ModalEditCourse from 'components/modals/modalEditCourse/ModalEditCourse'
import { Card, Typography } from 'antd'
import './style.css'

const CourseList = () => {
  const { Title } = Typography
  const navigate = useNavigate()
  const courses = [
    {
      id: 1,
      name: 'Learn Redux',
      duration: 1,
      difficulty: 1,
      completed: 100,
      numberLesson: 6,
      numberQuiz: 2,
      tags: ['ESL', 'English', 'Native Speaker']
    },
    {
      id: 2,
      name: 'Learn Flask',
      duration: 2,
      difficulty: 2,
      completed: 12,
      numberLesson: 6,
      numberQuiz: 2,
      tags: ['ESL', 'Advanced English', 'Native Speaker']
    },
    {
      id: 3,
      name: 'Learn Javascript',
      duration: 3,
      difficulty: 3,
      completed: 75,
      numberLesson: 6,
      numberQuiz: 2,
      tags: ['ESL', 'Intermediate English', 'Native Speaker']
    },
    {
      id: 4,
      name: 'Learn Typescript',
      duration: 4,
      difficulty: 4,
      completed: 0,
      numberLesson: 6,
      numberQuiz: 2,
      tags: ['ESL', 'Native Level English', 'Native Speaker']
    }
  ]

  const handleResumeCourse = (courseID: number) => {
    console.log('handleResumeCourse')
    navigate(`/auth/course/${courseID}`)
  }

  return (
    <div className="course_main">
      <div className="course_title">
        <Title level={3}>My Courses</Title>
        <ModalEditCourse />
      </div>
      {courses.map((course, count) => {
        count++
        return (
          <Card
            key={count}
            bordered={false}
            style={{ marginBottom: '1rem' }}
            className="card_course"
          >
            <CourseSummary
              key={count}
              id={course.id}
              name={course.name}
              duration={course.duration}
              difficulty={course.difficulty}
              completed={course.completed}
              numberLesson={course.numberLesson}
              numberQuiz={course.numberQuiz}
              tags={course.tags}
              handleCourse={handleResumeCourse}
              isNotEnrolled={false}
            />
          </Card>
        )
      })}
    </div>
  )
}
export default CourseList

import { useNavigate, useParams } from 'react-router'
import CourseContent from 'components/courseContent/CourseContent'
import useTitle from 'hooks/useTitle'
import { Card, PageHeader } from 'antd'

const CoursePage = () => {
  const navigate = useNavigate()
  const urlParams = useParams()
  const courseID = urlParams?.courseID
  useTitle(`Course ${courseID}`)

  const course = {
    courseID: 1,
    courseName: 'Course 1',
    duration: 1,
    difficulty: 1,
    completed: 0,
    numberLesson: 3,
    numberQuiz: 3,
    tags: ['ESL', 'English', 'Native Speaker']
  }

  const tags = ['ESL English', 'ESL', 'English']

  const lessons = [
    {
      id: 1,
      name: 'Lesson 1',
      author: 'Antoine',
      duration: 1,
      difficulty: 2,
      completed: 100,
      course_id: 1
    },
    {
      id: 2,
      name: 'Lesson 2',
      author: 'Bastien',
      duration: 2,
      difficulty: 4,
      completed: 100,
      course_id: 1
    },
    {
      id: 3,
      name: 'Lesson 3',
      author: 'Bastien',
      duration: 3,
      difficulty: 4,
      completed: 0,
      course_id: 1
    },
    {
      id: 4,
      name: 'Lesson 4',
      author: 'Bastien',
      duration: 4,
      difficulty: 4,
      completed: 0,
      course_id: 1
    },
    {
      id: 5,
      name: 'Lesson 5',
      author: 'Bastien',
      duration: 5,
      difficulty: 4,
      completed: 0,
      course_id: 1
    },
    {
      id: 6,
      name: 'Lesson 6',
      author: 'Bastien',
      duration: 6,
      difficulty: 4,
      completed: 0,
      course_id: 1
    }
  ]

  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => navigate(-1)}
        title="Course"
        subTitle="Course Summary"
      />
      <Card
        bordered={false}
        style={{
          marginLeft: '1rem',
          marginRight: '1rem',
          marginBottom: '1rem'
        }}
        className="card_course_content"
      >
        <CourseContent course={course} tags={tags} lessons={lessons} />
      </Card>
    </div>
  )
}
export default CoursePage

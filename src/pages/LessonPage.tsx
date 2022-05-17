import { useNavigate, useParams } from 'react-router'
import LessonContent from 'components/lessonContent/LessonContent'
import useTitle from 'hooks/useTitle'
import { Card, PageHeader } from 'antd'

const LessonPage = () => {
  const navigate = useNavigate()
  const urlParams = useParams()
  const lessonID = urlParams?.lessonID
  useTitle(`Lesson ${lessonID}`)

  const lessons = [
    {
      id: 1,
      name: 'Lesson 1',
      author: 'Antoine',
      duration: 1,
      difficulty: 2,
      completed: 100,
      course_id: 1,
      course_name: 'Course 1',
      quizs: [],
      wikidatas: []
    },
    {
      id: 2,
      name: 'Lesson 2',
      author: 'Bastien',
      duration: 2,
      difficulty: 4,
      completed: 100,
      course_id: 1,
      course_name: 'Course 1',
      quizs: [],
      wikidatas: []
    },
    {
      id: 3,
      name: 'Lesson 3',
      author: 'Bastien',
      duration: 3,
      difficulty: 4,
      completed: 0,
      course_id: 1,
      course_name: 'Course 1',
      quizs: [],
      wikidatas: []
    },
    {
      id: 4,
      name: 'Lesson 4',
      author: 'Bastien',
      duration: 4,
      difficulty: 4,
      completed: 0,
      course_id: 1,
      course_name: 'Course 1',
      quizs: [],
      wikidatas: []
    },
    {
      id: 5,
      name: 'Lesson 5',
      author: 'Bastien',
      duration: 5,
      difficulty: 4,
      completed: 0,
      course_id: 1,
      course_name: 'Course 1',
      quizs: [],
      wikidatas: []
    },
    {
      id: 6,
      name: 'Lesson 6',
      author: 'Bastien',
      duration: 6,
      difficulty: 4,
      completed: 0,
      course_id: 1,
      course_name: 'Course 1',
      quizs: [],
      wikidatas: []
    }
  ]

  const lesson = {
    id: 1,
    name: 'Lesson ESL1-1',
    author: 'Barbenes',
    duration: 1,
    difficulty: 1,
    course_id: 1,
    course_name: 'Course 1',
    completed: 0,
    quizs: [
      {
        id: 1,
        name: 'Quiz ESL English',
        lesson_id: 1
      },
      {
        id: 2,
        name: 'Quiz 2 ESL English',
        lesson_id: 2
      }
    ],
    wikidatas: [
      {
        id: 1,
        title: 'Part 1',
        description: `<p>This tutorial will be the fourtenth in the Linux for hackers series and will focus on the MySQL database. Although this is not strictly a Linux tutorial, MySQL is the database of choice on most Linux distributions. In addition, it is the most widely used database behind database driven web applications. This installment is critical to understand before we progress to hacking MySQL databases and before we hack web applications that use MySQL (which there are literally thousands).</p>
				<p>Luckily, BackTrack has MySQL already installed (if you are using another distribution, you can usually download and install MySQL from the software repository) and has a graphical start and stop. Let's start our MySQL service.</p>
				</div></div></figure></figure> <p>When we do so, we should see a screen like that below pop up briefly and then disappear.</p> 
				
				<img src="https://img.wonderhowto.com/img/31/58/63524355438197/0/hack-like-pro-linux-basics-for-aspiring-hacker-part-14-mysql.w1456.jpg" alt="Hack Like a Pro: Linux Basics for the Aspiring Hacker, Part 14 (MySQL)" width="532" height="532" style="max-width:532px;height:auto;"/> 

				
				`,
        lesson_id: 1,
        wikipicture: [],
        wikivideo: []
      },
      {
        id: 2,
        title: 'Part 2',
        description: `<p>Now that our MySQL service is started, we can begin to use it. First, we need to authenticate ourselves by logging in.</p><p>Open a terminal and type:</p>
				<code>mysql -u root -p</code><br/><br/>`,
        lesson_id: 1,
        wikipicture: [],
        wikivideo: []
      }
    ]
  }

  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => navigate(-1)}
        title="Lesson"
        subTitle="Lesson Summary"
      />
      <Card
        bordered={false}
        className="card_lesson_main"
        style={{
          marginLeft: '1rem',
          marginRight: '1rem',
          marginBottom: '1rem',
          paddingTop: '0.5rem'
        }}
      >
        <LessonContent lesson={lesson} lessons={lessons} />
      </Card>
    </div>
  )
}
export default LessonPage

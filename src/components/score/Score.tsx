import { Card, Divider, Statistic, Typography } from 'antd'
import './score.css'

const Score = () => {
  const { Title } = Typography
  const scores = [
    { lesson_name: 'Lesson 1', quiz_name: 'Quiz 1', score: 56 },
    { lesson_name: 'Lesson 2', quiz_name: 'Quiz 2', score: 75 },
    { lesson_name: 'Lesson 3', quiz_name: 'Quiz 3', score: 24 },
    { lesson_name: 'Lesson 4', quiz_name: 'Quiz 4', score: 97 }
  ]

  return (
    <div className="score_title">
      <Title level={3}>Latest Scores</Title>
      <Card bordered={false}>
        {scores.map((score, count) => {
          count++
          return (
            <div key={count}>
              <Statistic
                className="stat_course_lower stat_score"
                title={`${score.lesson_name} - ${score.quiz_name}`}
                value={score.score}
                suffix="%"
              />
              {count !== scores.length && <Divider />}
            </div>
          )
        })}
      </Card>
    </div>
  )
}
export default Score

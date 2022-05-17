import ModalEditGoals from 'components/modals/modalEditGoals/ModalEditGoals'
import { Card, Divider, Statistic, Timeline, Typography } from 'antd'
import './style.css'

const Goal = () => {
  const { Title } = Typography
  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  return (
    <div className="goal_main">
      <div className="goal_title">
        <Title level={3}>My Goals</Title>
        <ModalEditGoals />
      </div>
      <Card
        className="goal_card"
        bordered={false}
        style={{ paddingBottom: '0rem !important' }}
      >
        <Statistic
          className="stat_goal"
          title="THIS WEEK"
          prefix="0"
          value=" of 5 days"
        />
        <Divider dashed />
        <Timeline>
          {weekDays.map((days, count) => {
            count++
            return (
              <Timeline.Item
                key={count}
                color={count === 3 || count === 2 ? 'green' : 'red'}
              >
                {days}
              </Timeline.Item>
            )
          })}
        </Timeline>
      </Card>
    </div>
  )
}
export default Goal

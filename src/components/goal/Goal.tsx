import ModalEditGoals from 'components/modals/modalEditGoals/ModalEditGoals'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { fetchGoal } from 'features/goals/actions'
import {
  goalHasError,
  goalIsLoading,
  goalsSelectors
} from 'features/goals/selectors'
import { resetGoalError } from 'features/goals/slice'
import { profileActive } from 'features/profiles/selectors'
import {
  Button,
  Card,
  Col,
  Divider,
  Row,
  Spin,
  Statistic,
  Timeline,
  Typography
} from 'antd'
import './style.css'

const Goal = () => {
  const dispatch = useAppDispatch()
  const profileID = useAppSelector(profileActive)
  const loadingGoal = useAppSelector(goalIsLoading)
  const errorGoal = useAppSelector(goalHasError)
  const goal = useAppSelector(goalsSelectors.selectEntities)

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

  const handleTryAgain = () => {
    dispatch(resetGoalError())
    dispatch(fetchGoal(profileID))
  }

  return (
    <div className="goal_main">
      <div className="goal_title">
        <Title level={3}>My Goals</Title>
        {!errorGoal && !loadingGoal && (
          <ModalEditGoals goal={goal} profileID={profileID} />
        )}
      </div>
      <Card
        className="goal_card"
        bordered={false}
        style={{ paddingBottom: '0rem !important' }}
      >
        {errorGoal ? (
          <div style={{ minHeight: '455px' }}>
            <Row className="row_error">
              <Col>
                <p className="ant-statistic-title">Error contacting server</p>
              </Col>
            </Row>
            <Row className="row_error">
              <Col>
                <Button type="link" onClick={handleTryAgain}>
                  Try Again
                </Button>
              </Col>
            </Row>
          </div>
        ) : loadingGoal ? (
          <Row className="row_loading" style={{ minHeight: '455px' }}>
            <Col>
              <Spin />
            </Col>
          </Row>
        ) : (
          <>
            <Statistic
              className="stat_goal"
              title="THIS WEEK"
              prefix="1"
              value={`of ${goal[profileID]?.days} days`}
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
          </>
        )}
      </Card>
    </div>
  )
}
export default Goal

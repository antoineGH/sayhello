import { useEffect } from 'react'
import CourseList from 'components/courseList/CourseList'
import Goal from 'components/goal/Goal'
import Score from 'components/score/Score'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import useTitle from 'hooks/useTitle'
import { fetchGoal } from 'features/goals/actions'
import { goalsSelectors } from 'features/goals/selectors'
import { profileActive } from 'features/profiles/selectors'
import { fetchLastestResults } from 'features/results/actions'
import { Col, PageHeader, Row } from 'antd'

const Home = () => {
  useTitle('Home')
  const dispatch = useAppDispatch()
  const profileID = useAppSelector(profileActive)
  const goalsTotal = useAppSelector(goalsSelectors.selectTotal)

  useEffect(() => {
    if (profileID === 0) return
    if (goalsTotal !== 0) {
      dispatch(fetchGoal(profileID))
    }
  }, [dispatch, profileID, goalsTotal])

  useEffect(() => {
    if (profileID === 0) return
    dispatch(fetchLastestResults(profileID))
  }, [dispatch, profileID])

  return (
    <>
      <Row>
        <Col>
          <PageHeader
            className="site-page-header"
            title="Home"
            subTitle="Your Dashboard"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={24} xl={16}>
          <CourseList />
        </Col>
        <Col xs={24} xl={8}>
          <Row>
            <Col span={24} sm={12} xl={24}>
              <Goal />
            </Col>
            <Col xs={24} sm={12} xl={24}>
              <Score />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Home

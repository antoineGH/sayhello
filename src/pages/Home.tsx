import CourseList from 'components/courseList/CourseList'
import Goal from 'components/goal/Goal'
import Score from 'components/score/Score'
import { useAppSelector } from 'hooks/hooks'
import useTitle from 'hooks/useTitle'
import { goalsSelectors } from 'features/goals/selectors'
import { Col, PageHeader, Row } from 'antd'

const Home = () => {
  useTitle('Home')

  const goals = useAppSelector(goalsSelectors.selectAll)
  console.log(goals)

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
              {/* TODO: ON PROFILE LOADING, ERROR */}
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

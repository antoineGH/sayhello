import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { profileActive } from 'features/profiles/selectors'
import { fetchLastestResults } from 'features/results/actions'
import {
  ResultsSelector,
  resultHasError,
  resultIsLoading
} from 'features/results/selectors'
import { resetResultError } from 'features/results/slice'
import {
  Button,
  Card,
  Col,
  Divider,
  Row,
  Spin,
  Statistic,
  Typography
} from 'antd'
import './score.css'

const Score = () => {
  const dispatch = useAppDispatch()
  const profileID = useAppSelector(profileActive)
  const loadingResult = useAppSelector(resultIsLoading)
  const errorResult = useAppSelector(resultHasError)
  const scores = useAppSelector(ResultsSelector.selectEntities)
  const { Title } = Typography

  const handleTryAgain = () => {
    dispatch(resetResultError())
    dispatch(fetchLastestResults(profileID))
  }

  const formatTimeStamp = (date_created?: String): String => {
    if (date_created) {
      const date_update = date_created.replace('T', ' ').slice(0, 19)
      return date_update
    }
    return ''
  }

  const SortResult = (array: any[]) => {
    array.sort(
      (a, b) =>
        Number(new Date(b.date_created)) - Number(new Date(a.date_created))
    )
    return array
  }

  return (
    <div className="score_title">
      <Title level={3}>Latest Scores</Title>
      <Card bordered={false}>
        {errorResult ? (
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
        ) : loadingResult ? (
          <Row className="row_loading" style={{ minHeight: '455px' }}>
            <Col>
              <Spin />
            </Col>
          </Row>
        ) : (
          SortResult(Object.values(scores)).map((score, count) => {
            count++
            return (
              <Row key={score?.id}>
                <Col className="score_date">
                  {formatTimeStamp(score?.date_created)}
                </Col>
                <Col>
                  <Statistic
                    className="stat_course_lower stat_score"
                    title={`${score?.lesson_name} - ${score?.quiz_name}`}
                    value={score?.score}
                    suffix="%"
                  />

                  {count !== Object.values(scores).length && <Divider />}
                </Col>
              </Row>
            )
          })
        )}
      </Card>
    </div>
  )
}
export default Score

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { profileActive } from 'features/profiles/selectors'
import { fetchLastestResults } from 'features/results/actions'
import {
  ResultsSelector,
  resultHasError,
  resultIsLoading,
  resultsSelector
} from 'features/results/selectors'
import { resetResultError } from 'features/results/slice'
import { Result } from 'types/result'
import { Dictionary } from '@reduxjs/toolkit'
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
  const scores = useAppSelector(resultsSelector)
  const { Title } = Typography

  const handleTryAgain = () => {
    dispatch(resetResultError())
    dispatch(fetchLastestResults(profileID))
  }

  useEffect(() => {
    console.log(scores)
  }, [scores])

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
          scores.map((score, count) => {
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
          })
          // <p>lol</p>
        )}
      </Card>
    </div>
  )
}
export default Score

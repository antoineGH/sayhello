import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import TopBarComponent from 'components/topBarComponent/TopBarComponent'
import TopMenu from 'components/topMenu/TopMenu'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { fetchGoal } from 'features/goals/actions'
import { fetchProfiles } from 'features/profiles/actions'
import {
  profileActive,
  profileHasError,
  profileIsLoading,
  profilesSelectors
} from 'features/profiles/selectors'
import { resetProfileError, setActiveID } from 'features/profiles/slice'
import { fetchUser } from 'features/user/actions'
import { userHasError, userIsLoading } from 'features/user/selector'
import { resetUserError } from 'features/user/slice'
import { Button, Col, Grid, Layout, Row, Spin } from 'antd'

const Auth = () => {
  const [visible, setVisible] = useState(false)
  const { Header, Footer } = Layout
  const { useBreakpoint } = Grid
  const screens = useBreakpoint()
  const md = screens?.md
  const dispatch = useAppDispatch()
  const profileID = useAppSelector(profileActive)

  // HARDCODED USERID
  const userID = 2

  const profiles = useAppSelector(profilesSelectors.selectAll)
  const isLoadingUser = useAppSelector(userIsLoading)
  const hasErrorUser = useAppSelector(userHasError)
  const isLoadingProfile = useAppSelector(profileIsLoading)
  const hasErrorProfile = useAppSelector(profileHasError)

  useEffect(() => {
    dispatch(fetchUser(userID))
    // .then(response => {
    //   response.hasOwnProperty('payload') && dispatch(fetchProfiles(userID))
    // })
  }, [dispatch])

  useEffect(() => {
    console.log('useEffect fetchProfiles')
    dispatch(fetchProfiles(userID))
  }, [dispatch, userID])

  useEffect(() => {
    if (profileID === 0) return
    dispatch(fetchGoal(profileID))
  }, [dispatch, profileID])

  const handleCancel = (): void => {
    setVisible(false)
  }

  const handleSwitchProfile = (profileID: number): void => {
    dispatch(setActiveID(profileID))
    setVisible(false)
  }

  const handleTryAgain = () => {
    dispatch(resetUserError())
    dispatch(resetProfileError())
    dispatch(fetchUser(userID)).then(() => {
      dispatch(fetchProfiles(userID))
    })
  }

  const handleLogout = (): void => {
    console.log('handleLogout')
  }

  const Error = () => {
    return (
      <>
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
      </>
    )
  }

  const Loading = () => {
    return (
      <Row className="row_loading">
        <Col>
          <Spin />
        </Col>
      </Row>
    )
  }

  const Loaded = () => {
    return (
      <>
        <Header className="header">
          {md ? (
            <TopMenu
              visible={visible}
              setVisible={setVisible}
              handleCancel={handleCancel}
              handleSwitchProfile={handleSwitchProfile}
              handleLogout={handleLogout}
            />
          ) : (
            <TopBarComponent
              visible={visible}
              setVisible={setVisible}
              handleCancel={handleCancel}
              handleSwitchProfile={handleSwitchProfile}
              handleLogout={handleLogout}
            />
          )}
        </Header>
        <Outlet />
        <Footer
          style={{ textAlign: 'center', backgroundColor: '#d4dadf' }}
        ></Footer>
      </>
    )
  }

  return hasErrorProfile || hasErrorUser ? (
    <Error />
  ) : isLoadingProfile || isLoadingUser ? (
    <Loading />
  ) : profiles.length > 0 ? (
    <Loaded />
  ) : (
    <></>
  )
}

export default Auth

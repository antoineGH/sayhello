import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import TopBarComponent from 'components/topBarComponent/TopBarComponent'
import TopMenu from 'components/topMenu/TopMenu'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { fetchProfiles } from 'features/profiles/actions'
import {
  profileHasError,
  profileIsLoading,
  profilesSelectors
} from 'features/profiles/selectors'
import { resetProfileError, setActive } from 'features/profiles/slice'
import { fetchUsers } from 'features/users/actions'
import { userHasError, userIsLoading } from 'features/users/selector'
import { resetUserError } from 'features/users/slice'
import { Button, Col, Grid, Layout, Row, Spin } from 'antd'

const Auth = () => {
  const [visible, setVisible] = useState(false)
  const dispatch = useAppDispatch()
  const { Header, Footer } = Layout
  const { useBreakpoint } = Grid
  const screens = useBreakpoint()
  const md = screens?.md

  // HARDCODED USERID
  const userID = 1

  const profiles = useAppSelector(profilesSelectors.selectAll)
  const isLoadingUser = useAppSelector(userIsLoading)
  const hasErrorUser = useAppSelector(userHasError)
  const isLoadingProfile = useAppSelector(profileIsLoading)
  const hasErrorProfile = useAppSelector(profileHasError)

  useEffect(() => {
    dispatch(fetchUsers()).then(response => {
      response.hasOwnProperty('payload') && dispatch(fetchProfiles(userID))
    })
  }, [dispatch])

  const handleCancel = (): void => {
    setVisible(false)
  }

  const handleSwitchProfile = (profileID: number): void => {
    dispatch(setActive(profileID))
    setVisible(false)
  }

  const handleTryAgain = () => {
    dispatch(resetUserError())
    dispatch(resetProfileError())
    dispatch(fetchUsers()).then(() => {
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

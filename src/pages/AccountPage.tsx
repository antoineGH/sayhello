import EditAccount from 'components/editAccount/EditAccount'
import EditProfile from 'components/editProfile/EditProfile'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import useTitle from 'hooks/useTitle'
import { profilesSelectors } from 'features/profiles/selectors'
import { setActiveID } from 'features/profiles/slice'
import { usersSelectors } from 'features/users/selector'
import { Col, PageHeader, Row } from 'antd'

const AccountPage = () => {
  useTitle('Account')
  const user = useAppSelector(state => usersSelectors.selectById(state, 1))
  const profiles = useAppSelector(profilesSelectors.selectAll)
  const dispatch = useAppDispatch()

  const handleSwitchProfile = (profileID: number) => {
    dispatch(setActiveID(profileID))
  }

  return (
    <>
      <Row>
        <Col>
          <PageHeader
            className="site-page-header"
            title="Account Information"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={8}>
          <EditAccount user={user} />
        </Col>
        <Col xs={24} md={16}>
          <EditProfile
            profiles={profiles}
            isModal={false}
            handleSwitchProfile={handleSwitchProfile}
          />
        </Col>
      </Row>
    </>
  )
}
export default AccountPage

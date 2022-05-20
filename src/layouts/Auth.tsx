import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import TopBarComponent from 'components/topBarComponent/TopBarComponent'
import TopMenu from 'components/topMenu/TopMenu'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { fetchUsers } from 'features/users/actions'
import { usersSelectors } from 'features/users/selector'
import { Grid, Layout } from 'antd'

const Auth = () => {
  const [visible, setVisible] = useState(false)
  const dispatch = useAppDispatch()
  const { Header, Footer } = Layout
  const { useBreakpoint } = Grid
  const screens = useBreakpoint()
  const md = screens?.md

  const totalUsers = useAppSelector(usersSelectors.selectTotal)
  const allUsers = useAppSelector(usersSelectors.selectAll)
  const user1 = useAppSelector(state => usersSelectors.selectById(state, 1))

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const handleCancel = (): void => {
    setVisible(false)
  }

  const handleSwitchProfile = (profileID: number): void => {
    console.log(`handleSwitchProfile ProfileID: ${profileID}`)
    setVisible(false)
  }

  const handleLogout = (): void => {
    console.log('handleLogout')
  }

  const user = {
    id: 1,
    email: 'antoine.ratat@gmail.com',
    password: 'test',
    first_name: 'Antoine',
    last_name: 'Ratat',
    date_created: '2022-02-27T18:45:43.511Z',
    profiles: [
      {
        id: 1,
        name: 'Antoine',
        avatar:
          'https://fr.gravatar.com/userimage/120424681/f0988edb94af4c3b8731c42b2ebae37c.png',
        age: 31,
        user_id: 1
      },
      {
        id: 2,
        name: 'Carrie',
        avatar:
          'https://secure.gravatar.com/userimage/120424681/b77218678307e7fb0e7afce0df04b52c?size=400',
        age: 54,
        user_id: 1
      },
      {
        id: 3,
        name: 'Bastien',
        avatar:
          'https://www.gravatar.com/userimage/120424681/1c7e2f0e022ac36a2835ad9b0f2bd09c?size=120',
        age: 26,
        user_id: 2
      },
      {
        id: 4,
        name: 'Max',
        avatar:
          'https://www.gravatar.com/userimage/120424681/5e05bb39aae93745809bf0a293fdd945?size=120',
        age: 51,
        user_id: 2
      }
    ]
  }

  return (
    <>
      <Header className="header">
        {md ? (
          <TopMenu
            visible={visible}
            setVisible={setVisible}
            profiles={user.profiles}
            handleCancel={handleCancel}
            handleSwitchProfile={handleSwitchProfile}
            handleLogout={handleLogout}
          />
        ) : (
          <TopBarComponent
            visible={visible}
            setVisible={setVisible}
            profiles={user.profiles}
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

export default Auth
function selectIds(
  arg0: number
): (state: {
  users: import('@reduxjs/toolkit').EntityState<
    import('../types/profile').User
  > & { loading: boolean; error: boolean }
}) => unknown {
  throw new Error('Function not implemented.')
}

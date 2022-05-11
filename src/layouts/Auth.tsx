import { Outlet } from 'react-router'
import TopMenu from 'components/topMenu/TopMenu'
import TopBarComponent from 'components/topBarComponent/TopBarComponent'
import { Grid, Layout } from 'antd'

const Auth = () => {
	const { Header, Footer } = Layout
	const { useBreakpoint } = Grid
	const screens = useBreakpoint()
	const md = screens?.md

	return (
		<>
			<Header className='header'>{md ? <TopMenu /> : <TopBarComponent />}</Header>
			<Outlet />
			<Footer style={{ textAlign: 'center', backgroundColor: '#d4dadf' }}></Footer>
		</>
	)
}

export default Auth

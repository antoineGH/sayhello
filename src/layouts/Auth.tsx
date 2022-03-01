import { Outlet } from 'react-router'
import { Layout } from 'antd'
import TopMenu from 'components/topMenu/TopMenu'

const Auth = () => {
	const { Header, Footer } = Layout
	return (
		<>
			<Header>
				<TopMenu />
			</Header>
			<Outlet />
			<Footer style={{ textAlign: 'center', backgroundColor: '#d4dadf' }}></Footer>
		</>
	)
}

export default Auth

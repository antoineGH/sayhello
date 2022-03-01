import { Outlet } from 'react-router'
import { Layout } from 'antd'

const Auth = () => {
	const { Header, Footer } = Layout
	return (
		<>
			<Header></Header>
			<Outlet />
			<Footer style={{ textAlign: 'center', backgroundColor: '#d4dadf' }}></Footer>
		</>
	)
}

export default Auth

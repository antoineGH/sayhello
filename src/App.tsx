import React, { useState } from 'react'
import routes from 'routes'
import { useRoutes } from 'react-router'
import { Switch, Layout } from 'antd'
import './App.css'

const App: React.FC = (): JSX.Element => {
	const [isLogged, setIsLogged] = useState(true)
	const routing = useRoutes(routes(isLogged))
	const { Content } = Layout

	return (
		<>
			{/* <Switch onChange={() => setIsLogged(!isLogged)} checked={isLogged} /> */}
			{/* <p>isLogged: {String(isLogged)}</p> */}
			<Layout className='layout-content'>
				<Content>{routing}</Content>
			</Layout>
		</>
	)
}

export default App

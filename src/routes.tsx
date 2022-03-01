import { Navigate } from 'react-router-dom'
import UnAuth from 'layouts/Unauth'
import Auth from 'layouts/Auth'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Forgot from 'pages/Forgot'

const routes = (isLogged: Boolean) => [
	{
		path: '/auth',
		element: isLogged ? <Auth /> : <Navigate to='/login' />,
		children: [
			{ path: 'home', element: <Home /> },
			{ path: '/auth', element: <Navigate to='/auth/home' /> },
		],
	},
	{
		path: '/',
		element: !isLogged ? <UnAuth /> : <Navigate to='/auth' />,
		children: [
			{ path: 'login', element: <Login /> },
			{ path: 'register', element: <Register /> },
			{ path: 'forgot', element: <Forgot /> },
			{ path: '/', element: <Navigate to='/login' /> },
		],
	},
]

export default routes

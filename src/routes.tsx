import { Navigate } from 'react-router-dom'
import Auth from 'layouts/Auth'
import UnAuth from 'layouts/UnAuth'
import Home from 'pages/Home'
import Course from 'pages/Course'
import Quiz from 'pages/Quiz'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Forgot from 'pages/Forgot'

const routes = (isLogged: Boolean) => [
	{
		path: '/auth',
		element: isLogged ? <Auth /> : <Navigate to='/login' />,
		children: [
			{ path: 'home', element: <Home /> },
			{ path: 'course', element: <Course /> },
			{ path: 'quiz', element: <Quiz /> },
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

import { Navigate } from 'react-router-dom'
import Auth from 'layouts/Auth'
import UnAuth from 'layouts/UnAuth'
import Home from 'pages/Home'
import Course from 'pages/Course'
import Lesson from 'pages/Lesson'
import Quiz from 'pages/Quiz'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Forgot from 'pages/Forgot'
import Reset from 'pages/Reset'
import QuizPage from 'pages/QuizPage'
import CourseContent from 'components/courseContent/CourseContent'

const routes = (isLogged: Boolean) => [
	{
		path: '/auth',
		element: isLogged ? <Auth /> : <Navigate to='/login' />,
		children: [
			{ path: 'home', element: <Home /> },
			{ path: 'course', element: <Course /> },
			{ path: 'course/:courseID', element: <CourseContent /> },
			{ path: 'lesson', element: <Lesson /> },
			{ path: 'quiz', element: <Quiz /> },
			{ path: 'quiz/:quizID', element: <QuizPage /> },
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
			{ path: 'reset', element: <Reset /> },
			{ path: '/', element: <Navigate to='/login' /> },
		],
	},
]

export default routes

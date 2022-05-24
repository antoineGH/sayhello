import Auth from 'layouts/Auth'
import UnAuth from 'layouts/UnAuth'
import AccountPage from 'pages/AccountPage'
import Course from 'pages/Course'
import CoursePage from 'pages/CoursePage'
import Forgot from 'pages/Forgot'
import Home from 'pages/Home'
import Lesson from 'pages/Lesson'
import LessonPage from 'pages/LessonPage'
import Login from 'pages/Login'
import Quiz from 'pages/Quiz'
import QuizPage from 'pages/QuizPage'
import Register from 'pages/Register'
import Reset from 'pages/Reset'
import { Navigate } from 'react-router-dom'

const routes = (isLogged: Boolean) => [
  {
    path: '/auth',
    element: isLogged ? <Auth /> : <Navigate to="/login" />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'course', element: <Course /> },
      { path: 'course/:courseID', element: <CoursePage /> },
      { path: 'lesson', element: <Lesson /> },
      { path: 'lesson/:lessonID', element: <LessonPage /> },
      { path: 'quiz', element: <Quiz /> },
      { path: 'quiz/:quizID', element: <QuizPage /> },
      { path: 'account', element: <AccountPage /> },
      { path: '/auth', element: <Navigate to="/auth/home" /> }
    ]
  },
  {
    path: '/',
    element: !isLogged ? <UnAuth /> : <Navigate to="/auth" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'forgot', element: <Forgot /> },
      { path: 'reset', element: <Reset /> },
      { path: '/', element: <Navigate to="/login" /> }
    ]
  }
]

export default routes

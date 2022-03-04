import { PageHeader } from 'antd'
import QuizCatalog from 'components/quizCatalog/QuizCatalog'
import useTitle from 'hooks/useTitle'
import { useNavigate } from 'react-router'

const Quiz = () => {
	const navigate = useNavigate()
	useTitle('Quiz')

	return (
		<div>
			<PageHeader
				className='site-page-header'
				onBack={() => navigate(-1)}
				title='Quiz'
				subTitle='Find your quizzes'
			/>
			<QuizCatalog />
		</div>
	)
}

export default Quiz

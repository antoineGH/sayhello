import { PageHeader } from 'antd'
import useTitle from 'hooks/useTitle'
import { useNavigate } from 'react-router'

const Quiz = () => {
	const navigate = useNavigate()
	useTitle('Quiz')

	return (
		<>
			<PageHeader
				className='site-page-header'
				onBack={() => navigate(-1)}
				title='Quiz'
				subTitle='Get ready for your quiz'
			/>
		</>
	)
}

export default Quiz

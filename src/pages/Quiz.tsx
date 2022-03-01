import { PageHeader } from 'antd'
import useTitle from 'hooks/useTitle'

const Quiz = () => {
	useTitle('Quiz')

	return (
		<>
			<PageHeader
				className='site-page-header'
				onBack={() => null}
				title='Quiz'
				subTitle='Get ready for your quiz'
			/>
		</>
	)
}

export default Quiz

import { PageHeader } from 'antd'
import useTitle from 'hooks/useTitle'

const Lesson = () => {
	useTitle('Lessons')
	return (
		<>
			<PageHeader className='site-page-header' onBack={() => null} title='Lessons' subTitle='Find your Lessons' />
		</>
	)
}

export default Lesson

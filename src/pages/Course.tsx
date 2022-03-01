import { PageHeader } from 'antd'
import useTitle from 'hooks/useTitle'

const Course = () => {
	useTitle('Courses')
	return (
		<>
			<PageHeader className='site-page-header' onBack={() => null} title='Courses' subTitle='Find your courses' />
		</>
	)
}

export default Course

import { PageHeader } from 'antd'
import useTitle from 'hooks/useTitle'
import { useNavigate } from 'react-router'

const Course = () => {
	useTitle('Courses')
	const navigate = useNavigate()

	return (
		<>
			<PageHeader
				className='site-page-header'
				onBack={() => navigate(-1)}
				title='Courses'
				subTitle='Find your courses'
			/>
		</>
	)
}

export default Course

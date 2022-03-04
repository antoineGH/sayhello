import { PageHeader } from 'antd'
import CourseCatalog from 'components/courseCatalog/CourseCatalog'
import useTitle from 'hooks/useTitle'
import { useNavigate } from 'react-router'

const Course = () => {
	useTitle('Courses')
	const navigate = useNavigate()

	return (
		<div>
			<PageHeader
				className='site-page-header'
				onBack={() => navigate(-1)}
				title='Courses'
				subTitle='Find your courses'
			/>
			<CourseCatalog />
		</div>
	)
}

export default Course

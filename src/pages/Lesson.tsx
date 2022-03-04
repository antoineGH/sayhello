import { PageHeader } from 'antd'
import LessonCatalog from 'components/lessonCatalog/LessonCatalog'
import useTitle from 'hooks/useTitle'
import { useNavigate } from 'react-router'

const Lesson = () => {
	useTitle('Lessons')
	const navigate = useNavigate()
	return (
		<div>
			<PageHeader
				className='site-page-header'
				onBack={() => navigate(-1)}
				title='Lessons'
				subTitle='Find your Lessons'
			/>
			<LessonCatalog />
		</div>
	)
}

export default Lesson

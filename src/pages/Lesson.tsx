import { PageHeader } from 'antd'
import useTitle from 'hooks/useTitle'
import { useNavigate } from 'react-router'

const Lesson = () => {
	useTitle('Lessons')
	const navigate = useNavigate()
	return (
		<>
			<PageHeader
				className='site-page-header'
				onBack={() => navigate(-1)}
				title='Lessons'
				subTitle='Find your Lessons'
			/>
		</>
	)
}

export default Lesson

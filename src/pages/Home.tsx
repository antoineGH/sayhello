import { Col, PageHeader, Row } from 'antd'
import CourseList from 'components/courseList/CourseList'
import Goal from 'components/goal/Goal'
import ModalEditCourse from 'components/modals/modalEditCourse/ModalEditCourse'
import ModalEditGoals from 'components/modals/modalEditGoals/ModalEditGoals'
import Score from 'components/score/Score'
import useTitle from 'hooks/useTitle'

const Home = () => {
	useTitle('Home')
	return (
		<>
			<Row>
				<Col>
					<PageHeader className='site-page-header' title='Home' subTitle='Welcome to sayHello' />
				</Col>
			</Row>
			<Row>
				<Col span={16}>
					<CourseList />
				</Col>
				<Col span={8}>
					<Row>
						<Col span={24}>
							<Goal />
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<Score />
						</Col>
					</Row>
				</Col>
			</Row>
			<ModalEditCourse />
			<ModalEditGoals />
		</>
	)
}

export default Home

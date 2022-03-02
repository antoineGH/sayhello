import { Col, PageHeader, Row } from 'antd'
import Goal from 'components/goal/Goal'
import useTitle from 'hooks/useTitle'

const Home = () => {
	useTitle('Home')
	return (
		<>
			<PageHeader className='site-page-header' title='Home' subTitle='Welcome to sayHello' />
			<Row>
				<Col>
					<Goal />
				</Col>
			</Row>
		</>
	)
}

export default Home

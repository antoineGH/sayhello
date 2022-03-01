import { PageHeader } from 'antd'
import useTitle from 'hooks/useTitle'

const Home = () => {
	useTitle('Home')
	return (
		<>
			<PageHeader className='site-page-header' title='Home' subTitle='Welcome to sayHello' />
		</>
	)
}

export default Home

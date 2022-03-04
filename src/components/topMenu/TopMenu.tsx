import { Col, Row } from 'antd'
import MenuItem from './MenuItem'

const TopMenu = () => {
	return (
		<>
			<Row>
				<Col style={{ backgroundColor: 'pink' }} span={1}></Col>
				<Col span={5}>
					<MenuItem />
				</Col>
				<Col style={{ backgroundColor: 'yellow' }} span={4} offset={14}></Col>
			</Row>
		</>
	)
}

export default TopMenu

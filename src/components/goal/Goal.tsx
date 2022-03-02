import { Button, Card, Divider, Statistic, Timeline, Typography } from 'antd'
import './style.css'

const Goal = () => {
	const { Title } = Typography
	const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

	const handleEditGoal = (): void => {
		console.log('handleEditGoal')
	}

	return (
		<>
			<div className='goal_title'>
				<Title level={3}>My Goals</Title>
				<Button onClick={handleEditGoal} type='link'>
					Edit
				</Button>
			</div>
			<Card bordered={false} style={{ width: 350 }}>
				<Statistic title='THIS WEEK' value='0 of 5 days' />
				<Divider dashed />
				<Timeline>
					{weekDays.map((days, count) => {
						count++
						return (
							<Timeline.Item key={count} color={count === 3 || count === 2 ? 'green' : 'red'}>
								{days}
							</Timeline.Item>
						)
					})}
				</Timeline>
			</Card>
		</>
	)
}
export default Goal

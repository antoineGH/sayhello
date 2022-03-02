import { Button, Col, Divider, Progress, Row, Statistic, Typography } from 'antd'

interface Props {
	courseID: number
	courseName: string
	duration: number
	difficulty: number
	completed: number
	handleResumeCourse: (courseID: number) => void
}

const CourseSummary = ({ courseID, courseName, duration, difficulty, completed, handleResumeCourse }: Props) => {
	const { Title } = Typography
	return (
		<>
			<Title level={4}>{courseName}</Title>
			<Row>
				<Col span={4}>
					<Statistic title='Duration' value={duration} suffix='h' />
				</Col>
				<Col span={2} offset={18}>
					<Statistic title='Difficulty' value={difficulty} suffix='/10' />
				</Col>
			</Row>
			<Progress percent={completed} status='active' />
			<Button onClick={() => handleResumeCourse(courseID)}>Resume</Button>
			<Divider />
		</>
	)
}
export default CourseSummary

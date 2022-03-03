import { Button, Col, Divider, Progress, Row, Statistic, Tag, Typography } from 'antd'

interface Props {
	courseID: number
	courseName: string
	duration: number
	difficulty: number
	completed: number
	tags: string[]
	handleCourse: (courseID: number) => void
	isEnrolled: boolean
}

const CourseSummary = ({
	courseID,
	courseName,
	duration,
	difficulty,
	completed,
	tags,
	handleCourse,
	isEnrolled,
}: Props) => {
	const { Title } = Typography
	return (
		<>
			<Title level={4}>{courseName}</Title>
			<Row>
				{tags.map((tag, count) => {
					count++
					return <Tag key={count}>{tag}</Tag>
				})}
			</Row>
			{!isEnrolled && <Progress percent={completed} status='active' />}
			<Row style={{ marginTop: '1rem' }}>
				<Col span={4}>
					<Statistic title='Duration' value={duration} suffix='h' />
				</Col>
				<Col span={2} offset={18}>
					<Statistic title='Difficulty' value={difficulty} suffix='/10' />
				</Col>
			</Row>
			<Button style={{ marginTop: '1rem' }} onClick={() => handleCourse(courseID)}>
				{isEnrolled ? 'Enroll' : 'Resume'}
			</Button>
			<Divider />
		</>
	)
}
export default CourseSummary

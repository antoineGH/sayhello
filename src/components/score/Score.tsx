import { Card, Divider, Statistic, Typography } from 'antd'

const Score = () => {
	const { Title } = Typography
	const scores = [
		{ lesson_name: 'Lesson 1', quiz_name: 'Quiz 1', score: 56 },
		{ lesson_name: 'Lesson 2', quiz_name: 'Quiz 2', score: 75 },
		{ lesson_name: 'Lesson 3', quiz_name: 'Quiz 3', score: 24 },
		{ lesson_name: 'Lesson 4', quiz_name: 'Quiz 4', score: 97 },
	]

	return (
		<>
			<Title level={3}>Latest Scores</Title>
			<Card bordered={false} style={{ width: 350 }}>
				{scores.map((score, count) => {
					count++
					return (
						<div key={count}>
							<Statistic
								title={`${score.lesson_name} - ${score.quiz_name}`}
								value={score.score}
								suffix='/ 100'
							/>
							{count !== scores.length && <Divider />}
						</div>
					)
				})}
			</Card>
		</>
	)
}
export default Score

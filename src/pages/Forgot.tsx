import { PageHeader } from 'antd'
import useTitle from 'hooks/useTitle'

const Forgot = () => {
	useTitle('Forgot')
	return (
		<>
			<PageHeader
				className='site-page-header'
				onBack={() => null}
				title='Forgot Password'
				subTitle='Reset your password'
			/>
		</>
	)
}

export default Forgot

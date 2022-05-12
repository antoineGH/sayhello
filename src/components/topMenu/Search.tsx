import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Modal } from 'antd'
import { useState } from 'react'

const SearchBar = () => {
	const [visible, setVisible] = useState(false)
	const [search, setSearch] = useState('')
	const { Search } = Input

	const onSearch = () => {
		console.log(`onSearch: ${search}`)
	}

	const handleCancel = () => {
		setVisible(false)
	}

	return (
		<>
			<Button
				icon={<SearchOutlined />}
				onClick={() => setVisible(true)}
				className='button_search'
				type='link'
				size='large'
			/>
			<Modal
				className='search_modal'
				title='Basic Modal'
				visible={visible}
				footer={false}
				closable={false}
				maskStyle={{ backgroundColor: '#00000026', top: '64px' }}
				onCancel={handleCancel}>
				<Input
					size='large'
					placeholder='large size'
					prefix={<SearchOutlined />}
					onChange={(e) => setSearch(e.target.value)}
					onPressEnter={onSearch}
				/>
			</Modal>
		</>
	)
}

export default SearchBar

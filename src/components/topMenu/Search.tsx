import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Modal } from 'antd'
import { useState } from 'react'

const SearchBar = () => {
	const [visible, setVisible] = useState(false)
	const [search, setSearch] = useState('')

	const onSearch = () => {
		search && console.log(`onSearch: ${search}`)
		return
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
				title='Search Modal'
				visible={visible}
				destroyOnClose={true}
				footer={false}
				closable={false}
				maskStyle={{ backgroundColor: '#00000026', top: '64px' }}
				onCancel={handleCancel}>
				<Input
					autoFocus={true}
					className='input_search'
					size='large'
					placeholder='Search our catalog'
					prefix={<SearchOutlined />}
					onChange={(e) => setSearch(e.target.value)}
					onPressEnter={onSearch}
				/>
			</Modal>
		</>
	)
}

export default SearchBar

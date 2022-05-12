import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Modal, Tooltip } from 'antd'
import useEventListener from 'hooks/useEventListener'
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

	const handler = (event: KeyboardEvent) => {
		if (event.code === 'Slash') {
			setVisible(true)
		}
		return
	}

	useEventListener('keydown', handler)

	return (
		<>
			<Tooltip title='Press /'>
				<Button
					icon={<SearchOutlined />}
					onClick={() => setVisible(true)}
					className='button_search'
					type='link'
					size='large'
				/>
			</Tooltip>
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

import { Input } from 'antd'

const SearchBar = () => {
	const { Search } = Input

	const onSearch = () => {
		console.log('onSearch')
	}

	return (
		<>
			<Search placeholder='Search our catalog' allowClear onSearch={onSearch} style={{ width: 200 }} />
		</>
	)
}

export default SearchBar

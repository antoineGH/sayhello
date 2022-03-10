import { Input } from 'antd'

const SearchBar = () => {
	const { Search } = Input

	const onSearch = () => {
		console.log('onSearch')
	}

	return (
		<>
			<Search placeholder='input search text' allowClear onSearch={onSearch} style={{ width: 200 }} />
		</>
	)
}

export default SearchBar

import { useState } from 'react'
import useEventListener from 'hooks/useEventListener'
import { Button, Col, Input, Modal, Row, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const SearchBar = () => {
  const [visible, setVisible] = useState(false)
  const [search, setSearch] = useState('')

  const onSearch = () => {
    if (search) {
      console.log(`onSearch: ${search}`)
      setVisible(false)
    }
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

  const popularSearchKeyWords = [
    'Data Science',
    'Python',
    'Web Development',
    ' HTML',
    'Java'
  ]

  return (
    <>
      <Tooltip title="Press /">
        <Button
          icon={<SearchOutlined />}
          onClick={() => setVisible(true)}
          className="button_search"
          type="link"
          size="large"
        />
      </Tooltip>
      <Modal
        className="search_modal"
        title="Search Modal"
        visible={visible}
        destroyOnClose={true}
        footer={false}
        closable={false}
        maskStyle={{ backgroundColor: '#00000026', top: '64px' }}
        onCancel={handleCancel}
      >
        <Row className="row_search">
          <Col span={24}>
            <Input
              autoFocus={true}
              className="input_search"
              size="large"
              placeholder="Search our catalog"
              prefix={<SearchOutlined />}
              onChange={e => setSearch(e.target.value)}
              onPressEnter={onSearch}
            />
          </Col>
          <Col span={24}>Popular Searches</Col>
          <Col span={12}>
            <Row className="row_popular">
              {popularSearchKeyWords.map((keyWord, count) => {
                count++
                return (
                  <Col key={count}>
                    <Button type="link">{keyWord}</Button>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

export default SearchBar

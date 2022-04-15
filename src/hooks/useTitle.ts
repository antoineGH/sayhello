import { useRef, useEffect } from 'react'

const useTitle = (title: string, prevailOnUnmount = false) => {
	const defaultTitle = useRef(document.title)

	useEffect(() => {
		document.title = title + ' | SayHello'
	}, [title])

	useEffect(
		() => () => {
			if (!prevailOnUnmount) {
				document.title = defaultTitle.current
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	)
}

export default useTitle

import { useRef, useEffect } from 'react'

const useTitle = (title: string, prevailOnUnmount = false) => {
	const defaultTitle = useRef(document.title)

	useEffect(() => {
		document.title = 'SayHello - ' + title
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

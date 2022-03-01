import { Link } from 'react-router-dom'
import { useResolvedPath, useMatch } from 'react-router'
import type { LinkProps } from 'react-router-dom'

function CustomLink({ children, to, ...props }: LinkProps) {
	let resolved = useResolvedPath(to)
	let match = useMatch({ path: resolved.pathname, end: true })

	return (
		<Link style={{ textDecoration: match ? 'underline' : 'none' }} to={to} {...props}>
			{children}
		</Link>
	)
}

export default CustomLink

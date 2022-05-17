import { useMatch, useResolvedPath } from 'react-router'
import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link
      style={{ color: match ? '#3a10e5' : '' }}
      to={to}
      {...props}
      className="font_menu_item"
    >
      {children}
    </Link>
  )
}

export default CustomLink

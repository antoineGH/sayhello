import { menu } from './menu'
import CustomLink from './CustomLink'

const MenuItem = () => {
	return (
		<>
			{menu.map((element) => {
				return (
					<CustomLink key={element.name} to={element.path}>
						{element.name}
					</CustomLink>
				)
			})}
		</>
	)
}

export default MenuItem

import CustomLink from './CustomLink'
import { menu } from './menu'
import './style.css'

const MenuItem = () => {
  return (
    <div className="topmenu_items">
      {menu.map(element => {
        return (
          <CustomLink key={element.name} to={element.path}>
            {element.name}
          </CustomLink>
        )
      })}
    </div>
  )
}

export default MenuItem

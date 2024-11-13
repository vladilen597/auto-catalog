import { NavLink } from 'react-router-dom'
import { memo } from 'react'

import './HeaderLink.scss'

interface IHeaderLinkProps {
  title?: string
  to: string
  children?: React.ReactNode
}

const HeaderLink = memo(({ title, to, children }: IHeaderLinkProps) => {
  if (children) {
    return (
      <NavLink
        className={({ isActive }) =>
          `header-link ${isActive ? 'header-link--active' : null}`
        }
        to={to}
      >
        {children}
      </NavLink>
    )
  }

  return (
    <NavLink
      className={({ isActive }) =>
        `header-link ${isActive ? 'header-link--active' : null}`
      }
      to={to}
    >
      {title}
    </NavLink>
  )
})

export default HeaderLink

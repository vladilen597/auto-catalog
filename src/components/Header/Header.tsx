import HeaderLink from './HeaderLink/HeaderLink'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <ul className='header__links'>
        <li className='header__links-item'>
          <Link className='header__logo-link' to='/catalog'>
            <img className='header__links-logo' src={logo} />
            <h1 className='header__title'>AutoLounge</h1>
          </Link>
        </li>
        <li className='header__links-item'>
          <HeaderLink title='Main' to='/catalog' />
        </li>
        <li className='header__links-item'>
          <HeaderLink title='Add auto' to='/add-auto' />
        </li>
        <li className='header__links-item'>
          <HeaderLink title='Find auto' to='/find-auto' />
        </li>
        <li className='header__links-item'></li>
      </ul>
    </header>
  )
}

export default Header

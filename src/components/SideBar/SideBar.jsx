import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import cls from './SideBar.module.css'

const SideBar = () => {
  return (
    <Router>
      <nav className={cls.nav}>
        <ul>
          <li>
            <Link to='/'>Profile</Link>
          </li>
          <li>
            <Link to='/topic1'>Messages</Link>
          </li>
        </ul>
      </nav>
    </Router>
  )
}

export default SideBar

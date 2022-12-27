/*eslint-disable*/
import React from 'react'
import style from './navBar.module.scss'
import {navItems} from './navBar.config'
import {Link, useLocation} from 'react-router-dom'

const NavBar = () => {
    const location = useLocation()

    return (
        <nav className={style.container}>
            <ul className={style.nav_list}>
                {navItems.map((item) => (
                    <li className={style.nav_list_item} key={item.id}>
                        <Link to={item.path}>
                            <p className={location.pathname === item.path ? style.nav_list_item_title_active : style.nav_list_item_title}>
                                {item.title}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar

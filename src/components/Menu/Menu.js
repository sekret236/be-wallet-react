import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Menu.scss'

export const Menu = () => {
    return (
        <>
            <nav className="menu navigation">
                <ul>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'active' : 'menu li'
                        }
                    >
                        home
                    </NavLink>
                    <NavLink
                        to="/About"
                        className={({ isActive }) =>
                            isActive ? 'active' : 'menu a'
                        }
                    >
                        about
                    </NavLink>
                    <NavLink
                        to="/Category"
                        className={({ isActive }) =>
                            isActive ? 'active' : 'menu li'
                        }
                    >
                        <li className="categories">
                            Articles <i className="down"> </i>
                            <ul className="submenu">
                                <Link to="/Business">
                                    <li>Business</li>
                                </Link>
                                <Link to="/Finances">
                                    <li>Finances</li>
                                </Link>
                                <Link to="/Personal">
                                    <li>Personal</li>
                                </Link>
                                <Link to="/Tax">
                                    <li>Tax</li>
                                </Link>
                            </ul>
                        </li>
                    </NavLink>

                    <NavLink
                        to="/ContactUs"
                        className={({ isActive }) =>
                            isActive ? 'active' : 'menu li'
                        }
                    >
                        Contact Us
                    </NavLink>

                    <li className="border-blue">
                        {' '}
                        <a href="##" className="color-blue">
                            favourites
                        </a>{' '}
                    </li>
                </ul>
            </nav>
        </>
    )
}

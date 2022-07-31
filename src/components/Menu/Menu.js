import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Menu.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const Menu = ({ count }) => {
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
                        to="/Services"
                        className={({ isActive }) =>
                            isActive ? 'active' : 'menu a'
                        }
                    >
                        services
                    </NavLink>
                    <NavLink
                        to="/ContactUs"
                        className={({ isActive }) =>
                            isActive ? 'active' : 'menu li'
                        }
                    >
                        Contact Us
                    </NavLink>
                    <NavLink
                        to="/Favorites"
                        className={({ isActive }) =>
                            isActive ? 'active' : 'menu li'
                        }
                    >
                        Favorites
                        <FavoriteIcon />
                    </NavLink>
                    <div className="likeCount">{count}</div>
                </ul>
            </nav>
        </>
    )
}

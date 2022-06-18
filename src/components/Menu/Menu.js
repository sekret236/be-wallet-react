import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

export const Menu = () => {
    return (
        <>
            <nav className="menu navigation">
                <ul>
                    <Link to="/">
                        <li className="active">
                            {' '}
                            <a href="##">home</a>{' '}
                        </li>
                    </Link>
                    <Link to="/About">
                        <li>
                            {' '}
                            <a href="##">about</a>{' '}
                        </li>
                    </Link>

                    <li className="categories">
                        {' '}
                        <a href="##">articles</a>{' '}
                        <ul className="submenu">
                            <Link to="/Business">
                                <li>
                                    <a href="">Business</a>
                                </li>
                            </Link>
                            <Link to="/Finances">
                                <li>
                                    <a href="">Finances</a>
                                </li>
                            </Link>
                            <Link to="/Personal">
                                <li>
                                    <a href="">Personal</a>
                                </li>
                            </Link>
                            <Link to="/Tax">
                                <li>
                                    <a href="">Tax</a>
                                </li>
                            </Link>
                        </ul>
                    </li>
                    <Link to="/Services">
                        <li>
                            {' '}
                            <a href="##">services</a>{' '}
                        </li>
                    </Link>
                    <Link to="/ContactUs">
                        <li>
                            {' '}
                            <a href="##">contact us</a>{' '}
                        </li>
                    </Link>

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

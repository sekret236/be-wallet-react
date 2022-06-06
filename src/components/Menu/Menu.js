import React from 'react'
import './Menu.scss'

export const Menu = () => {
    return (
        <>
                <nav className="menu navigation">
                    <ul>
                        <li className="active"> <a href="">home</a> </li>
                        <li> <a href="">about</a> </li>
                        <li> <a href="">articles</a> </li>
                        <li> <a href="">services</a> </li>
                        <li> <a href="">contact us</a> </li>
                        <li className="border-blue"> <a href="" className="color-blue">favourites</a> </li>
                    </ul>
                </nav>
        </>
    )
}

import React from 'react'
import './Header.scss'
import logo from '../../assets/images/logo.png'
import { Menu } from 'components/Menu/Menu'

export const Header = ({ count }) => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row header-section">
                        <div className="col-md-4">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-8 mobile-menu-section">
                            <Menu count={count} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

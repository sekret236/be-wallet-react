import React from 'react'

import './FooterLogo.scss'
import logo from '../../assets/images/logo.png'

export const FooterLogo = () => {
    return (
        <>
            <div className="logo-information">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <p>
                    Aliquam sem. In hendrerit nulla quam nulla nunc, accumsan
                    congue. Lorem ipsum primis
                </p>
            </div>
        </>
    )
}

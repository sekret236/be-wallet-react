import React from 'react'

import { FooterInfo } from 'components/FooterInfo/FooterInfo'
import { FooterLogo } from 'components/FooterLogo/FooterLogo'
import { FooterSocialMedia } from 'components/FooterSocialMedia/FooterSocialMedia'
import './Footer.scss'

export const Footer = () => {
    return (
        <>
            <footer className="footer-information">
                <div className="container">
                    <div className="row col-md-12">
                        <FooterLogo></FooterLogo>
                        <FooterInfo></FooterInfo>
                    </div>
                </div>
            </footer>
            <footer className="footer">
                <div className="container">
                    <div className="row row-footer">
                        <div className="col-xs-6 logo-footer">
                            <p>&copy2022 Web world. All rights Reserved</p>
                        </div>
                        <FooterSocialMedia></FooterSocialMedia>
                    </div>
                </div>
            </footer>
        </>
    )
}

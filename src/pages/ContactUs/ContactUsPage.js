import React from 'react'
import { ContactPage } from './ContactPage'

import './ContactUs.scss'

export const ContactUsPage = () => {
    return (
        <>
            <section className="contactUsPage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="h2">Contact Us</h3>
                        </div>
                    </div>
                </div>
            </section>
            <ContactPage />
        </>
    )
}

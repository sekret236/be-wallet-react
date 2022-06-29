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
                            <h2 className="h2">Contact Us</h2>
                        </div>
                    </div>
                </div>
            </section>
            <ContactPage />
        </>
    )
}

import React from 'react'

import './ContactUs.scss'
import { MapPage } from './MapPage'
import { ContactFormPage } from './ContactFormPage'

export const ContactPage = () => {
    return (
        <section className="contactPage">
            <div className="container">
                <div className="row">
                    <ContactFormPage />
                    <MapPage />
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import { ContactPage } from './ContactPage'
import './ContactUs.scss'
import { bounce } from 'react-animations'
import styled, { keyframes } from 'styled-components'

export const ContactUsPage = () => {
    const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;
`
    return (
        <>
            <section className="contactUsPage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Bounce>
                                <h2 className="h2">Contact Us</h2>
                            </Bounce>
                        </div>
                    </div>
                </div>
            </section>
            <ContactPage />
        </>
    )
}

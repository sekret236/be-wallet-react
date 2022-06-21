import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

import './ContactUs.scss'

export const ContactFormPage = () => {
    return (
        <>
            <div className="col-md-6 contactMe">
                <h2 className='h2'>Stay in touch with us</h2>
                <div className=" contact-form">
                    <div className="contact-form-block">
                        <form action="" className="form-contact-section">
                            <div className="close-button">X</div>
                            <div className="contacts-form-inputs">
                                <div className="name-email">
                                    <input
                                        id="your-name"
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="name-email">
                                    <input
                                        id="your-email"
                                        type="text"
                                        name="email"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>
                            <div className="textarea">
                                <textarea
                                    name="text"
                                    id="text"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                        </form>
                        
                    </div>
                </div>
                <div className="contactButton">
                            <ButtonToolbar>
                                <Button bsstyle="primary">
                                    Send a message
                                </Button>
                            </ButtonToolbar>
                        </div>
            </div>
        </>
    )
}

import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import './AboutPage.scss'

import aboutImg from '../../assets/images/Abouthome_wallet_bgsection5.jpg'

export const AboutSlider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aboutImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur.Praesent commodo cursus
                            magna, vel scelerisque nisl consectetur. Praesent
                            commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                        <h3>Banking services</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aboutImg}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur.Praesent commodo cursus
                            magna, vel scelerisque nisl consectetur. Praesent
                            commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                        <h3>Accounting</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aboutImg}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur.Praesent commodo cursus
                            magna, vel scelerisque nisl consectetur. Praesent
                            commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                        <h3>Business processes</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

import Carousel from 'react-bootstrap/Carousel'
import React from 'react'

import sliderF from '../../assets/images/slider1.jpg'
import sliderS from '../../assets/images/slider2.jpg'
import sliderTh from '../../assets/images/slider3.jpg'

export const SliderCarousel = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderF}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Business processes</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderS}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Accounting</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderTh}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Banking services</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

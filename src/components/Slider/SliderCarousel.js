import React from 'react'

import sliderF from '../../assets/images/slider1.jpg'
import sliderS from '../../assets/images/slider2.jpg'
import sliderTh from '../../assets/images/slider3.jpg'

export const SliderCarousel = () => {
    return (
        <>
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                    ></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={sliderF} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={sliderS} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={sliderTh} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

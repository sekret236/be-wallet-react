import React from 'react'

import './Slider.scss'
import { SliderCarousel } from './SliderCarousel'

export const Slider = () => {
    return (
        <>
            <section className="slider">
                <div className="container">
                    
                        <SliderCarousel />
                  
                </div>
            </section>
        </>
    )
}

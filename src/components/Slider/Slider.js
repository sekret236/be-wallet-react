import React from 'react'
import './Slider.scss'
import homeWaletSlider from '../../assets/images/home_wallet_slider_pic.png'

export const Slider = () => {
    return (
        <>
            <section className="slider">
                <div className="container">
                    <div className="row position">
                        <div className="col-md-6 wallet">
                            <p>Pay by your phone easily, anywhere.</p>
                        </div>
                        <div className="col-md-6 home-wallet">
                            <img src={homeWaletSlider} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

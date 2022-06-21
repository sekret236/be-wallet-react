import React from 'react'
import './AboutPage.scss'
import { AboutSlider } from './AboutSlider'
import { OurCompany } from './OurCompany'

export const AboutPage = () => {
    return (
        <>
            <OurCompany />
            <section className="aboutPage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 companyDesc">
                            <h3 className="h3">Vestibulum tincidunt</h3>
                            <p>
                                Aenean augue eu quam. Maecenas pretium, ipsum
                                ullamcorper ac, felis. Pellentesque habitant
                                morbi tristique mauris vehicula sit amet erat.
                                Sed et luctus augue imperdiet tincidunt
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h4 className="h4">Curabitur tempor</h4>
                            <p>
                                Lorem ipsum dolor sit amet quam. Phasellus a
                                ipsum. Fusce imperdiet quis, eleifend justo at
                                quam. Curabitur tempor. Phasellus fermentum
                                nonummy consequat ligula in sollicitudin digni
                                ssim, nulla sed est et magnis dis parturient
                                montes, nascetur ridiculus mus. Integer magna
                                ipsum sit amet erat. Sed a leo semper egestas.
                                Cum sociis natoque penatibus et magnis.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h4 className="h4">Duis ipsum</h4>
                            <p>
                                Lorem ipsum dolor sit amet quam. Phasellus a
                                ipsum. Fusce imperdiet quis, eleifend justo at
                                quam. Curabitur tempor. Phasellus fermentum
                                nonummy consequat ligula in sollicitudin digni
                                ssim, nulla sed est et magnis dis parturient
                                montes, nascetur ridiculus mus. Integer magna
                                ipsum sit amet erat. Sed a leo semper egestas.
                                Cum sociis natoque penatibus et magnis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <AboutSlider />
        </>
    )
}

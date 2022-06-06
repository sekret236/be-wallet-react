import React from 'react'
import featuresArray from 'Utils/featuresArray'
import { FeaturesBlock } from './FeaturesBlock'
import homeWalletPic1 from '../../assets/images/home_wallet_pic1.png'
import './Features.scss'

export const Features = () => {
    return (
        <>
            <section className="features">
                <div className="container features-container">
                    <div className="row appsFeatures">
                        <div className="col-md-12 features-header">
                            <h1 className="h1">App's core features</h1>
                            <p>
                                Aenean augue eu quam. Maecenas pretium, ipsum
                                ullamcorper ac, felis. Pellentesque habitant
                                morbi tristique mauris vehicula sit amet erat.
                                Sed et luctus augue imperdiet tincidunt
                                tristique mauris vehicula sit amet erat. Sed et
                                luctus augue imperdiet tincidunt.
                            </p>
                        </div>

                        {featuresArray.map(({ id, image, name, text }) => (
                            <div className="col-md-3 iconbox" key={id}>
                                <FeaturesBlock
                                    image={image}
                                    name={name}
                                    text={text}
                                />
                            </div>
                        ))}
                        <div className="col-md-12 home_wallet_pic1">
                            <img src={homeWalletPic1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

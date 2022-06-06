import React from 'react'

import imageOne from '../../assets/images/home_wallet_client_1.png'
import imageTwo from '../../assets/images/home_wallet_client_2.png'
import imageThree from '../../assets/images/home_wallet_client_3.png'
import imageFor from '../../assets/images/home_wallet_client_4.png'
import imageFive from '../../assets/images/home_wallet_client_5.png'
import imageSix from '../../assets/images/home_wallet_client_6.png'
import './ClientsPartners.scss'

export const ClientsPartners = () => {
    return (
        <>
            <section className="clients-and-partners">
                <div className="container">
                    <div className="row clientsPartners">
                        <div className="col-md-12 partners-header">
                            <h1 className="h1">Clients and partners</h1>
                            <p>
                                Vestibulum dapibus, mauris nec malesuada fames
                                ac turpis velit, rhoncus eu, luctus et interdum
                                adipiscing wisi. Aliquam erat ac ipsum. Integer
                                aliquam purus. Quisque lorem tortor fringilla
                                sed.
                            </p>
                        </div>
                        <div className="col-md-2 home_wallet_client">
                            <img src={imageOne} alt="" />
                        </div>
                        <div className="col-md-2 home_wallet_client">
                            <img src={imageTwo} alt="" />
                        </div>
                        <div className="col-md-2 home_wallet_client">
                            <img src={imageThree} alt="" />
                        </div>
                        <div className="col-md-2 home_wallet_client">
                            <img src={imageFor} alt="" />
                        </div>
                        <div className="col-md-2 home_wallet_client">
                            <img src={imageFive} alt="" />
                        </div>
                        <div className="col-md-2 home_wallet_client">
                            <img src={imageSix} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations'
import './Services.scss'
import { OurServicesPage } from './OurServicesPage'
import { Reviews } from 'components/Reviews/Reviews'
import { Card } from 'react-bootstrap'

const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;
`

export default class ServicesPage extends Component {
    render() {
        return (
            <>
                <section className="servicesPage">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Bounce>
                                    <h2 className="h2">Our Services</h2>
                                </Bounce>
                            </div>
                        </div>
                    </div>
                </section>
                <OurServicesPage />
                <div className="col-md-11 reviews-field">
                    <Card className="col-md-9 reviews-section">
                        <Reviews />
                    </Card>
                </div>
            </>
        )
    }
}

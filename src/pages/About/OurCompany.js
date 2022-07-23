import React from 'react'
import { bounce } from 'react-animations'
import styled, { keyframes } from 'styled-components'

export const OurCompany = () => {
    const Bounce = styled.div`
        animation: 2s ${keyframes`${bounce}`} infinite;
    `

    return (
        <section className="ourCompany">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Bounce>
                            <h2 className="h2">Our Company</h2>
                        </Bounce>
                    </div>
                </div>
            </div>
        </section>
    )
}

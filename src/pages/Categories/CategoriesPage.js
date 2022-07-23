import { FinancesPage } from 'pages/Categories/FinancesPage'
import React from 'react'
import { BusinessPage } from './BusinessPage'
import { PersonalPage } from './PersonalPage'
import { TaxPage } from './TaxPage'
import { bounce } from 'react-animations'
import styled, { keyframes } from 'styled-components'

export const CategoriesPage = () => {
    const Bounce = styled.div`
        animation: 2s ${keyframes`${bounce}`} infinite;
    `
    return (
        <>
            <section className="categoriesArticles">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 title">
                            <Bounce>
                                <h1 className="h1">Articles</h1>
                            </Bounce>
                        </div>
                    </div>
                </div>
            </section>
            <FinancesPage />
            <BusinessPage />
            <PersonalPage />
            <TaxPage />
        </>
    )
}

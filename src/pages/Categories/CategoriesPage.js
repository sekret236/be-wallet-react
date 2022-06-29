import { FinancesPage } from 'pages/Categories/FinancesPage'
import React from 'react'
import { BusinessPage } from './BusinessPage'
import { PersonalPage } from './PersonalPage'
import { TaxPage } from './TaxPage'

export const CategoriesPage = () => {
    return (
        <>
            <section className="categoriesArticles">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 title">
                            <h1 className="h1">Articles</h1>
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

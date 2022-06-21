import { FinancesPage } from 'pages/Categories/FinancesPage'
import React from 'react'
import { BusinessPage } from './BusinessPage'
import { PersonalPage } from './PersonalPage'
import { TaxPage } from './TaxPage'

export const CategoriesPage = () => {
    return (
        <>
            <FinancesPage />
            <BusinessPage />
            <PersonalPage />
            <TaxPage />
        </>
    )
}

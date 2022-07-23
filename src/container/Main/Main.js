import React from 'react'
import { Articles } from 'components/Articles/Articles'
import { ClientsPartners } from 'components/ClientsPartners/ClientsPartners'
import { Features } from 'components/Features/Features'
import { Slider } from 'components/Slider/Slider'
import { Route, Routes } from 'react-router-dom'
import { BusinessPage } from 'pages/Categories/BusinessPage'
import { FinancesPage } from 'pages/Categories/FinancesPage'
import { PersonalPage } from 'pages/Categories/PersonalPage'
import { TaxPage } from 'pages/Categories/TaxPage'
import { AboutPage } from 'pages/About/AboutPage'
import { ContactUsPage } from 'pages/ContactUs/ContactUsPage'
import { CategoriesPage } from 'pages/Categories/CategoriesPage'
import { ArticlesDescription } from 'pages/Categories/ArticlesDescription'
import ServicesPage from 'pages/Services/ServicesPage'

export const Main = ({ toggleLikeState, articlesLikeState }) => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <main>
                            <Slider />
                            <Articles
                                toggleLikeState={toggleLikeState}
                                articlesLikeState={articlesLikeState}
                            />
                            <Features />
                            <ClientsPartners />
                        </main>
                    }
                />

                <Route path="/Business" element={<BusinessPage />} />
                <Route path="/Finances" element={<FinancesPage />} />
                <Route path="/Personal" element={<PersonalPage />} />
                <Route path="/Tax" element={<TaxPage />} />
                <Route path="/About" element={<AboutPage />} />
                <Route path="/ContactUs" element={<ContactUsPage />} />
                <Route path="/Services" element={<ServicesPage />} />
                <Route path="/Category" element={<CategoriesPage />} />
                <Route path="/Category/Business" element={<BusinessPage />} />
                <Route path="/Category/Finances" element={<FinancesPage />} />
                <Route path="/Category/Personal" element={<PersonalPage />} />
                <Route path="/Category/Tax" element={<TaxPage />} />
                <Route
                    path="/:category/:id"
                    element={<ArticlesDescription />}
                />
            </Routes>
        </>
    )
}

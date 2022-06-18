import React from 'react'
import { Articles } from 'components/Articles/Articles'
import { ClientsPartners } from 'components/ClientsPartners/ClientsPartners'
import { Features } from 'components/Features/Features'
import { Slider } from 'components/Slider/Slider'
import { Route, Routes } from 'react-router-dom'
import { BusinessPage } from 'pages/Business/BusinessPage'
import { FinancesPage } from 'pages/Finances/FinancesPage'
import { PersonalPage } from 'pages/Personal/PersonalPage'
import { TaxPage } from 'pages/Tax/TaxPage'
import { AboutPage } from 'pages/About/AboutPage'
import { ServicesPage } from 'pages/OurServices/ServicesPage'
import { ContactUsPage } from 'pages/ContactUs/ContactUsPage'

export const Main = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <main>
                            <Slider />
                            <Articles />
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
                <Route path="/Services" element={<ServicesPage />} />
                <Route path="/ContactUs" element={<ContactUsPage />} />
            </Routes>
        </>
    )
}

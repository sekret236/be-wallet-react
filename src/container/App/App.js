import React from 'react'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import './App.scss'
import { Footer } from 'container/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

export const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

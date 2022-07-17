import React, { useState } from 'react'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import './App.scss'
import { Footer } from 'container/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import ScrollToTop from '../../components/ScrollToTop'

export const App = () => {
    const [articlesLikeState, setArticlesLikeState] = useState({
        1: true,
        2: true,
    })

    const toggleLikeState = (articleId) =>
        setArticlesLikeState((prevState) => ({
            ...prevState,
            [articleId]: !prevState[articleId],
        }))

    return (
        <>
            <Header />
            <ScrollToTop />
            <Main
                toggleLikeState={toggleLikeState}
                articlesLikeState={articlesLikeState}
            />
            <Footer />
        </>
    )
}

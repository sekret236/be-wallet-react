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

    const [count, setCount] = useState(1)
    const addArticle = () => setCount(count + 1)
    const removeArticle = () => setCount(count - 1)

    const [favouriteArticle, setFavouriteArticle] = useState({
        1: 1,
        name: 'Vestibulum commodo volutpat laoreet',
    })

    const addArticleToFavourite = (articleId, artname) => {
        setFavouriteArticle((prevState) => ({
            ...prevState,
            [articleId]: prevState[articleId] + artname,
        }))
    }

    return (
        <>
            <Header count={count} />
            <ScrollToTop />
            <Main
                toggleLikeState={toggleLikeState}
                articlesLikeState={articlesLikeState}
                count={count}
                addArticle={addArticle}
                removeArticle={removeArticle}
                favouriteArticle={favouriteArticle}
                addArticleToFavourite={addArticleToFavourite}
            />
            <Footer />
        </>
    )
}

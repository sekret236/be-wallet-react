import React from 'react'
import articlesArray from 'Utils/articlesArray'
import { ArticlesBlock } from './ArticlesBlock'
import './Articles.scss'

export const Articles = ({ toggleLikeState, articlesLikeState, count, addArticle, removeArticle, addArticleToFavourite }) => {
    return (
        <>
            <section className="articles">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 articles-title">
                            <h1 className="h1">News and articles</h1>
                        </div>
                        <div className="col-md-12 articles-section">
                            {articlesArray
                                .filter((topic) => topic.topic === 'Main')
                                .map(
                                    ({
                                        id,
                                        imagejpg,
                                        date,
                                        artname,
                                        context,
                                        question,
                                        topic,
                                        category,
                                    }) => (
                                        <div className="iconbox" key={id}>
                                            <ArticlesBlock
                                                id={id}
                                                imagejpg={imagejpg}
                                                date={date}
                                                artname={artname}
                                                context={context}
                                                question={question}
                                                topic={topic}
                                                category={category}
                                                toggleLikeState={
                                                    toggleLikeState
                                                }
                                                isLiked={articlesLikeState[id]}
                                                count={count}
                                                addArticle={addArticle}
                                                removeArticle={removeArticle}
                                                addArticleToFavourite={addArticleToFavourite}
                                            />
                                        </div>
                                    )
                                )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

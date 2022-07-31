import React from 'react'
import { keys } from 'lodash'
import { Card } from '@mui/material'
import './Favorites.scss'

export const Favorites = ({ favouriteArticle }) => {
    return (
        <>
            <section className="favorites">
                <div className="container">
                    <div className="row">
                        <div className='favouriteArticles'>
                            {keys(favouriteArticle).map((articleId) => (
                                <>
                                    <div className="col-md-6">
                                        <Card className='likedArticles'>
                                            <div className='articleId'>
                                                {articleId}:{' '}
                                                {favouriteArticle[articleId]}
                                            </div>
                                            <div>
                                                {articleId}:
                                                {
                                                    favouriteArticle[articleId]
                                                        .name
                                                }
                                            </div>
                                        </Card>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

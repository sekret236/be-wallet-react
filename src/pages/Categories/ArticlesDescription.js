import { Card } from '@mui/material'
import { Reviews } from 'components/Reviews/Reviews'
import React from 'react'
import { Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import articlesArray, { getArticlesObject } from 'Utils/articlesArray'
import './CategoriesPage.scss'
import Stars from './Stars'

export const ArticlesDescription = ({
    articlesObject = getArticlesObject(articlesArray),
}) => {
    let { id } = useParams()
    return (
        <>
            <section>
                <div className="container">
                    <div className="row descriptionBlock">
                        <div className="col-md-4 articlesDescription">
                            <div className="scale">
                                <Image
                                    src={articlesObject[id].imagejpg}
                                    rounded
                                    alt=""
                                />
                            </div>
                            <div className="Stars">
                                <Stars />{' '}
                            </div>
                        </div>
                        <div className="col-md-6 articlesDescription">
                            <p className="text">{articlesObject[id].artname}</p>
                            <p
                                className="context"
                                dangerouslySetInnerHTML={{
                                    __html: articlesObject[id].description,
                                }}
                            />
                        </div>

                        <div className="col-md-11 reviews-field">
                            <Card className="col-md-9 reviews-section">
                                <Reviews />
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

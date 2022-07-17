import React from 'react'
import Image from 'react-bootstrap/Image'
import './CategoriesPage.scss'
import articlesArray from '../../Utils/articlesArray'
import { ButtonToolbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const TaxPage = () => {
    return (
        <>
            <section className="categoriesTitle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 title">
                            <h1 className="h1">Tax</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="categoriesPage">
                <div className="container">
                    <div className="row categoryPage">
                        {articlesArray
                            .filter((category) => category.category === 'Tax')
                            .map(
                                ({
                                    id,
                                    imagejpg,
                                    artname,
                                    context,
                                    question,
                                    topic,
                                    category,
                                }) => (
                                    <div
                                        className="col-md-5 blockArticles scale"
                                        key={id}
                                    >
                                        <div
                                            className="articles-img"
                                            imagejpg={imagejpg}
                                            artname={artname}
                                            context={context}
                                            question={question}
                                            topic={topic}
                                            category={category}
                                        >
                                            <Image
                                                src={imagejpg}
                                                rounded
                                                alt=""
                                            />
                                        </div>
                                        <div className="description">
                                            <Link
                                                to={`/${category}/${id}`}
                                            >
                                                <p className="text">
                                                    {artname}
                                                </p>
                                            </Link>
                                            <p>{context}</p>
                                            <div className="do-you-like">
                                                <p>{question}</p>
                                                <div className="like"></div>
                                            </div>
                                            <ButtonToolbar>
                                                <Link
                                                    to={`/${category}/${id}`}
                                                >
                                                    <Button bsstyle="primary">
                                                        Read more..
                                                    </Button>
                                                </Link>
                                            </ButtonToolbar>
                                        </div>
                                    </div>
                                )
                            )}
                    </div>
                </div>
            </section>
        </>
    )
}

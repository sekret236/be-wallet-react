import React from 'react'
import Image from 'react-bootstrap/Image'
import './CategoriesPage.scss'
import articlesArray from '../../Utils/articlesArray'
import { ButtonToolbar, Button } from 'react-bootstrap'

export const BusinessPage = () => {
    return (
        <>
            <section className="categoriesTitle">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 title">
                            <h1 className="h1">Business</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="categoriesPage">
                <div className="container">
                    <div className="row">
                        
                        {articlesArray
                            .filter(
                                (category) => category.category === 'Business'
                            )
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
                                    <div className="col-md-12 blockArticles" key={id}>
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
                                            <p className="text">{artname}</p>
                                            <p>
                                                Cum sociis natoque penatibus et
                                                malesuada sit amet quam. Aliquam
                                                nonummy, tellus ante mollis
                                                sodales. Quisque nulla.
                                                Suspendisse vitae ante. Donec
                                                sit amet, consectetuer
                                                adipiscing elit. Sed dignissim
                                                vitae, vulputate imperdiet. Cum
                                                sociis natoque penatibus et
                                                malesuada sit amet quam. Aliquam
                                                nonummy, tellus ante mollis
                                                sodales. Quisque nulla.
                                            </p>
                                            <div className="do-you-like">
                                                <p>{question}</p>
                                                <div className="like"></div>
                                            </div>
                                            <ButtonToolbar>
                                                <Button bsstyle="primary">
                                                    Read more..
                                                </Button>
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

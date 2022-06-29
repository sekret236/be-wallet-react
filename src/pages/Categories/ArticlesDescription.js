import React from 'react'
import { Form, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import articlesArray, { getArticlesObject } from 'Utils/articlesArray'
import './CategoriesPage.scss'

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
                            <div className="contactForm">
                                <Form>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Label className="text">
                                            Name
                                        </Form.Label>
                                        <Form.Control
                                            className="textField"
                                            type="email"
                                            placeholder="Your name"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label className="text">
                                            Comments
                                        </Form.Label>
                                        <Form.Control
                                            className="textField"
                                            as="textarea"
                                            rows={3}
                                        />
                                    </Form.Group>
                                </Form>
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
                    </div>
                </div>
            </section>
        </>
    )
}

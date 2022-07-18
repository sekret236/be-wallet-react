import { Button, Card } from '@mui/material'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { arrReviews } from './ArrReviews'
import './Reviews.scss'

export const Reviews = () => {
    const [reviews, setReviews] = useState(arrReviews)
    const [newReview, setNewReview] = useState({
        name: '',
        text: '',
    })

    const handleText = (e) =>
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))

    const reviewSend = (e) => {
        e.preventDefault()
        setNewReview({
            name: '',
            text: '',
        })
        setReviews((value) => {
            return [...value, newReview]
        })
    }

    const handleName = (e) =>
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))

    return (
        <div className="reviews-block">
            <h5 className="textReview">
                Please, leave review about this product
            </h5>
            {reviews.map(({ name, text }, i) => (
                <Card className="reviews-block-item" key={i}>
                    <div>Name: {name}</div>
                    <div>Message: {text}</div>
                </Card>
            ))}

            <div className="contactForm">
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label className="textReview">Name</Form.Label>
                        <Form.Control
                            className="textField"
                            type="email"
                            placeholder="Your name"
                            value={newReview.name}
                            onChange={handleName}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label className="textReview">Comments</Form.Label>
                        <Form.Control
                            className="textField"
                            as="textarea"
                            rows={3}
                            value={newReview.text}
                            onChange={handleText}
                        />
                    </Form.Group>
                </Form>
            </div>
            <br />
            <Button variant="contained" onClick={reviewSend}>
                Leave review
            </Button>
        </div>
    )
}

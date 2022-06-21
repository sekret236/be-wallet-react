import React from 'react'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

export const ArticlesBlock = ({
    imagejpg,
    date,
    artname,
    context,
    question,
    topic,
    category,
}) => {
    return (
        <>
            <div className="articles-img">
                <Image src={imagejpg} rounded alt="" />
            </div>
            <p className="data">{date}</p>
            <p className="text">{artname}</p>
            <p className="context">{context}</p>
            <div className="do-you-like">
                <p>{question}</p>
                <div className="like"></div>
            </div>
            <Link to={`/Category/${category}`}>
                <form action="" method="">
                    <button>{category}</button>
                </form>
            </Link>
        </>
    )
}

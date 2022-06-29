import React from 'react'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const ArticlesBlock = ({
    imagejpg,
    date,
    artname,
    context,
    question,
    category,
    id,
}) => {
    return (
        <>
            <div className="articles-img scale">
                <Image src={imagejpg} rounded alt="" />
            </div>
            <p className="data">{date}</p>
            <p className="text">{artname}</p>
            <p className="context">{context}</p>
            <div className="do-you-like">
                <p>{question}</p>
                <FavoriteBorderIcon className="like" />
            </div>
            <Link className="button-category" to={`/Category/${category}`}>
                <form action="" method="">
                    <button>{category}</button>
                </form>
            </Link>
        </>
    )
}

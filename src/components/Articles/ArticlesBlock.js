import React from 'react'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Button } from 'react-bootstrap'

export const ArticlesBlock = ({
    imagejpg,
    date,
    artname,
    context,
    question,
    category,
    id,
    isLiked = false,
    toggleLikeState,
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
                <Button variant="light" onClick={() => toggleLikeState(id)}>
                    {isLiked ? (
                        <FavoriteIcon className="like" />
                    ) : (
                        <FavoriteBorderIcon className="like" />
                    )}
                </Button>
            </div>
            <Link className="button-category" to={`/Category/${category}`}>
                <form action="" method="">
                    <button>{category}</button>
                </form>
            </Link>
        </>
    )
}

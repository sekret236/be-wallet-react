import React from 'react'
import { Link } from 'react-router-dom'

export const ArticlesBlock = ({ imageJpg, date, artname, context, question, topic }) => {
    return (
        <>
            <div className="articles-img">
                <img src={imageJpg} alt="" />
            </div>
            <p className="data">{date}</p>
            <p className="text">{artname}</p>
            <p className="context">{context}</p>
            <div className="do-you-like">
                <p>{question}</p>
                <div className="like"></div>
            </div>
            
            <form action="" method="">
                <button>{topic}</button>
            </form>
            
            
        </>
    )
}

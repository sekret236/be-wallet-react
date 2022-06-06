import React from 'react'

export const ArticlesBlock = ({imageJpg, date, artname, question, topic}) => {
    return (
        <>
            <div className="articles-img">
                <img src={imageJpg} alt="" />
            </div>
            <p className="data">{date}</p>
            <p className="text">{artname}</p>
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

import React from 'react'

export const FeaturesBlock = ({ image, name, text }) => {
    return (
        <>
            <div>
                <img src={image} alt="" />
            </div>
            <p className="bold">{name}</p>
            <p>{text}</p>
        </>
    )
}

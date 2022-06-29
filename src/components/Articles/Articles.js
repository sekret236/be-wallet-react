import React from 'react'
import articlesArray from 'Utils/articlesArray'
import { ArticlesBlock } from './ArticlesBlock'
import './Articles.scss'

export const Articles = () => {
    return (
        <>
            <section className="articles">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 articles-title">
                            <h1 className="h1">News and articles</h1>
                        </div>
                        <div className="col-md-12 articles-section">
                            {articlesArray
                                .filter((topic) => topic.topic === 'Main')
                                .map(
                                    ({
                                        id,
                                        imagejpg,
                                        date,
                                        artname,
                                        context,
                                        question,
                                        topic,
                                        category,
                                    }) => (
                                        <div className="iconbox" key={id}>
                                            <ArticlesBlock
                                                imagejpg={imagejpg}
                                                date={date}
                                                artname={artname}
                                                context={context}
                                                question={question}
                                                topic={topic}
                                                category={category}
                                            />
                                        </div>
                                    )
                                )}
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

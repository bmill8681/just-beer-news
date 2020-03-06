// Frameworks
import React from 'react';

// Custom Components
import ArticleItem from './ArticleItem';
// Styling

/* articles : Array isRequired */
const ArticleList = props => {
    return (
        <>
            {
                props.articles ? props.articles.map((cur, index) => {
                    return (
                        <section>
                            <ArticleItem
                                key={index} // Could assume the article id is unique, but that isn't verified at the moment. 
                                data={cur}
                            />
                            {index < props.articles.length - 1 ? <div style={{ outline: "1px solid lightgrey" }}></div> : undefined}</section>
                    )
                }) : undefined
            }
        </>
    )
}

export default ArticleList;
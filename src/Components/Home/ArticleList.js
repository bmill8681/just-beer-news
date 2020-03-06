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
                        // Could assume the article id is unique, but that isn't verified at the moment.
                        // Also - if I was handling CSS differently I could omit the div being used as a divider between articles.
                        <section key={index+cur.id}>
                            <ArticleItem 
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
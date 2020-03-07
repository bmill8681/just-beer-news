// Frameworks
import React from 'react';

// Custom Components
import ArticleItem from './ArticleItem';

/*  articles : Array isRequired 
 *  Displays a list of articles.
 *  This element isn't entirely necessary in this demo. It's purpose would be to contain the list
 *  along with its header so it would be self-contained and may be used anywhere within the application/website
 */
const ArticleList = props => {
    return (
        <>
            {
                props.articles && props.articles.length > 0 ? props.articles.map((cur, index) => {
                    return (
                        // I would like to assume the article id is unique, but that isn't verified at the moment. So, I'm using the index
                        // as the key for the elements within the array.
                        // Also - if I was handling CSS differently I could omit the div being used as a divider between articles and use a pseudo selector.
                        <section key={index} style={{ width: "100%" }}>
                            <ArticleItem
                                data={cur}
                            />
                            {index < props.articles.length - 1 ? <div style={{ outline: "1px solid lightgrey" }}></div> : undefined}</section>
                    )
                }) : <h2 style={{}}>No news is good news. Check back soon!</h2>
            }
        </>
    )
}

export default ArticleList;
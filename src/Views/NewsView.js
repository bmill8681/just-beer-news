// Frameworks
import React, { useEffect, useState } from 'react';
// Custom Components
import LoadingIcon from '../Components/LoadingIcon';
import NewsArticleItem from '../Components/News/NewsArticleItem';
import ViewHeader from '../Components/ViewHeader';
// Styling
import styles from './CSS/NewsView.module.css';

// TEMPORARY - Used for local testing and left here to show how I did initial testing
// import testData from '../testData.json';

/*  News View
 *  Ideally this would be its own view, not necessarily a self-contained component for use on
 *  other views. As result, a lot of this code is repeated from the HomeView. This wouldn't typically be the case.
 */
const NewsView = props => {
    const url = "https://just-beer-8681.herokuapp.com/justBeerProxy.php";

    // State Management & Fetch on component mount
    const [data, setData] = useState({ payload: [] });
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    /* 
     * I would like to handle this in a lazy-loading fashion in a non-demo build and likely utilize
     * other API-URI's as discussed in the interview. IE: /api/v8/articles/someCategorieOfArticle
     * Note: It's an assumption that the articles are all unique. I found duplicates in the data after the top 6 records. 
     * Questions in development would be: Should I be filtering the results for unique records only? Or are the top 6
     * meant to be used in this way? In the NewsView, I filter the duplicate results.
     */
    // On component mount - fetches news articles
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setData(response);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false)
            }); // Ensuring articles is never undefined or null
    }, []);


    // Removes any articles with a duplicate ID from the fetched data
    useEffect(() => {
        const sortedData = data.payload.sort((a, b) => a.id < b.id);
        const removedDoubles = [];
        sortedData.forEach(cur => {
            if (!removedDoubles.find(doubleArticle => doubleArticle.id === cur.id)) {
                removedDoubles.push(cur);
            }
        });
        setArticles(removedDoubles)
    }, [data])

    return (
        <div className={styles.OuterWrapper}>
            <ViewHeader text="Latest Posts" linkText="Home" back link="/" />
            <main className={styles.Main}>
                { loading && <LoadingIcon /> }
                {
                    !loading && articles.length > 0 &&
                        articles.map((cur, index) => {
                            return <NewsArticleItem key={index} data={cur} />
                        })
                }
                { !loading && articles.length === 0 && <h2>Oops! Spilled my beer on the latest paper. Check back soon!</h2> }
            </main>
        </div>
    )
}

export default NewsView;
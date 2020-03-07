// Frameworks & Libraries
import React, { useEffect, useState } from 'react';
// Custom Components
import ArticleList from '../Components/Home/ArticleList';
import LoadingIcon from '../Components/LoadingIcon';
import ViewHeader from '../Components/ViewHeader';
// Styling
import styles from './CSS/HomeView.module.css';


/* Based on the current JustBeer website, this view would take in a
 * parameter to determine which categorie of news should be fetched / displayed.
 * A more comprehensive list of news articles would be included on this page and
 * I would likely load them dynamically using lazy-loading, unless that caused performace
 * issues, in which case paging could be done.
 */
const HomeView = props => {
    const url = "https://just-beer-8681.herokuapp.com/justBeerProxy.php";

    // State Management & Fetch on component mount
    const [data, setData] = useState({ payload: [] });
    const [loading, setLoading] = useState(false);
    const [topArticles, setTopArticles] = useState([]);

    /* 
     * I would like to handle this in a lazy-loading fashion in a non-demo build and likely utilize
     * other API-URI's as discussed in the interview. IE: /api/v8/articles/someCategorieOfArticle
     * Note: It's an assumption that the articles are all unique. I found duplicates in the data after the top 6 records. 
     * Questions in development would be: Should I be filtering the results for unique records only? Or are the top 6
     * meant to be used in this way? In the NewsView, I filter the duplicate results.
     */
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => { console.log(response); return response.json(); })
            .then(response => {
                response ? setData(response) : { payload: [] };
                setLoading(false);
            }) // Ensuring articles is never undefined or null
            .catch(err => {
                console.error(err)
                setLoading(false);
            });
    }, []);

    // Shallow copy of the first 6 articles retrieved. If a deep copy was needed I would use lodash-deepClone
    useEffect(() => {
        const maxLength = data.payload.length >= 6 ? 6 : data.payload.length;
        const top = data.payload.slice(0, maxLength);
        setTopArticles(top);
    }, [data]);

    /* This can be refactored since the header is the same, only thing changing
     * are the icon name and the link text. TODO: Create a reusable header component to replace the 'header' section.
     */
    return (
        <div className={styles.OuterWrapper}>
            <ViewHeader text="Latest Posts" linkText="More" forward link="/articles/all" />
            <main className={styles.Main}>
                { loading ? <LoadingIcon /> : <ArticleList articles={topArticles} /> }
            </main>
        </div>
    )
}

export default HomeView;
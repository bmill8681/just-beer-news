// Frameworks
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosBeer, IoIosArrowBack } from 'react-icons/io';
// Custom Components
import NewsArticleItem from '../Components/News/NewsArticleItem';
import ViewHeader from '../Components/ViewHeader';
// Styling
// import styles from './CSS/HomeView.module.css';
import styles from './CSS/NewsView.module.css';
// TEMPORARY
import testData from '../testData.json';

const NewsView = props => {
    const url = "https://justbeerapp.com/api/v8/articles/";

    // State Management & Fetch on component mount
    const [data, setData] = useState([]);

    // For localhost testing
    useEffect(() => {
        const sortedData = testData.payload.sort((a, b) => a.id < b.id);
        const removedDoubles = [];
        sortedData.forEach(cur => {
            if (!removedDoubles.find(doubleArticle => doubleArticle.id === cur.id)) {
                removedDoubles.push(cur);
            }
        });
        setData(removedDoubles)
    }, [])

    /* Storing fetched article data in local storage, though this isn't 100% necessary.
     * I would handle this in a lazy-loading fashion in a non-demo build and likely utilize
     * other API-URI's as discussed in the interview. IE: /api/v8/articles/someCategorieOfArticle
     */
    // useEffect(() => {
    //     if (localStorage.get("articleData")) {
    //         setData(localStorage.get("articleData"));
    //     } else {
    //         fetch(url)
    //             .then(response => response.json())
    //             .then(response => response ? setData(response) : { payload: [] }); // Ensuring articles is never undefined or null
    //     }
    // }, []);

    return (
        <div className={styles.OuterWrapper}>
            <ViewHeader text="Latest Posts" linkText="Home" back link="/" />
            <main className={styles.Main}>
                {
                    data ? data.map((cur, index) => {
                        return <NewsArticleItem key={index} data={cur} />
                    })
                        : <h2>Oops! Spilled my beer on the latest paper. Check back soon!</h2>
                }
            </main>
        </div>
    )
}

export default NewsView;
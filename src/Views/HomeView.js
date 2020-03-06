// Frameworks & Libraries
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosBeer, IoIosArrowForward } from 'react-icons/io';
// Custom Components
import ArticleList from '../Components/Home/ArticleList';
// Styling
import styles from './CSS/HomeView.module.css';

// TEMPORARY
import testData from '../testData.json';

/* Ideally, this wouldn't be 'HomeView' as it's meant to be a self contained component
 * that you would include on one of the actual application views. Named 'HomeView here
 * as it is the home-route for this demonstration.
 */
const HomeView = props => {
    const url = "https://justbeerapp.com/api/v8/articles/";

    // State Management & Fetch on component mount
    const [data, setData] = useState({ payload: [] });
    const [topArticles, setTopArticles] = useState([]);

    useEffect(() => { setData(testData) }, [])
    useEffect(() => {
        // I'm certain this could be cleaner. Will refactor if time permits.
        const [A1, A2, A3, A4, A5, A6] = data.payload;
        setTopArticles([A1, A2, A3, A4, A5, A6]);
    }, [data]);

    // useEffect(() => {
    //     if (localStorage.get("articleData")) {
    //         setData(localStorage.get("articleData"));
    //     } else {
    //         fetch(url)
    //             .then(response => response.json())
    //             .then(response => response ? setData(response) : { payload: [] }); // Ensuring articles is never undefined or null
    //     }
    // }, []);

    /* This can be refactored since the header is the same, only thing changing
     * are the icon name and the link text. TODO: Create a reusable header component to replace the 'header' section.
     */
    return (
        <div className={styles.OuterWrapper}>
            <header className={styles.Header}>
                <IoIosBeer
                    style={{ fontSize: "1.5em", margin: "0px 5px" }}
                    className={styles.Center}
                />
                <h1 className={[styles.H1, styles.Center].join(' ')}>
                    Latest Posts
                </h1>
                <Link to="/articles/all" className={styles.ReadMoreButton}>
                    <IoIosArrowForward
                        style={{ fontSize: "1.5em", margin: "0px 5px" }}
                        className={styles.Center}
                    />
                    <h2 className={[styles.H2, styles.Center].join(' ')} >
                        More
                    </h2>
                </Link>
            </header>
            <main className={styles.Main}>
                <ArticleList articles={topArticles} />
            </main>
        </div>
    )
}

export default HomeView;
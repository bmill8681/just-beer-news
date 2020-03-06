// Frameworks
import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosBeer, IoIosArrowBack } from 'react-icons/io';
// Custom Components

// Styling
import styles from './CSS/HomeView.module.css';

const NewsView = props => {
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
                <Link to="/" className={styles.ReadMoreButton}>
                    {/* <button
                    
                > */}
                    <IoIosArrowBack
                        style={{ fontSize: "1.5em", margin: "0px 5px" }}
                        className={styles.Center}
                    />
                    <h2 className={[styles.H2, styles.Center].join(' ')} >
                        Home
                </h2>
                    {/* </button> */}
                </Link>
            </header>
            {/* <ArticleList /> */}
        </div>
    )
}

export default NewsView;
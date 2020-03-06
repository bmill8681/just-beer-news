// Frameworks & Libraries
import React from 'react';
// Custom Components
import LoadingIcon from '../LoadingIcon';
// Styling
import styles from './NewsArticleItem.module.css';

/*  Displays a single news article teaser in a different format than appears in the
 *  top 6 articles list.
 *  Would link/route to the article within the application in non-demo practice.
 *  onClick of the element links to the original article in a new tab
 *  Props -
 *      data: object - object containing the data from the api. Must be in expected format. 
 */
const NewsArticleItem = props => {
    return props.data ?
        < div
            className={styles.OuterWrapper}
            onClick={() => window.open(props.data.permalink.link, "_blank")}
        >
            {
                // contained the image within a div here to show a secondary way to
                // display the image
                props.data.images &&
                <div
                    style={{ backgroundImage: `url(${props.data.images.share.desktop.link})`}}
                    className={styles.Image}
                ></div>
            }
            <section className={styles.Details}>
                {props.data.category && <h1 className={styles.H1}>{props.data.category.toUpperCase()}</h1>}
                {props.data.title && <h2 className={styles.H2}>{props.data.title}</h2>}
                {props.data.overview && <p className={styles.P}>{props.data.overview}</p>}
                <section className={styles.Fade} />
            </section>
        </div >
        : <LoadingIcon />
}

export default NewsArticleItem; 
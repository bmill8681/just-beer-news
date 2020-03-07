// Frameworks & Libraries
import React from 'react';
// Custom Components
import LoadingIcon from '../LoadingIcon';
// Styling
import styles from './ArticleItem.module.css';

/*  Displays a single news article teaser
 *  onClick of the element links to the original article in a new tab
 *  Would link/route to the article within the application in non-demo practice.
 *  Props -
 *      data: object - object containing the data from the api. Must be in expected format. 
 */
const ArticleItem = props => {
    return (
        < div
            className={styles.OuterWrapper}
            onClick={() => window.open(props.data.permalink.link, "_blank")}
        >
            {
                // Although not currently used as it appears that the desktop
                // and mobile images are the exact same, we could use an imageset
                // to select which image to use for better optimization if it is a concern
                props.data.images &&
                <img
                    src={props.data.images.thumb.mobile.link}
                    alt=""
                    className={styles.Image}
                />
            }
            <section className={styles.Details}>
                {props.data.category && <h1 className={styles.H1}>{props.data.category.toUpperCase()}</h1>}
                {props.data.title && <h2 className={styles.H2}>{props.data.title}</h2>}
                {props.data.overview && <p className={styles.P}>{props.data.overview}</p>}
                <section className={styles.Fade} />
            </section>
        </div >
    )
}

export default ArticleItem; 
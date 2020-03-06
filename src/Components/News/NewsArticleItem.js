// Frameworks & Libraries
import React from 'react';

// Custom Components
import LoadingIcon from '../LoadingIcon';
// Styling
import styles from './NewsArticleItem.module.css';

const NewsArticleItem = props => {
    return props.data ?
        < div
            className={styles.OuterWrapper}
            onClick={() => window.open(props.data.permalink.link, "_blank")}
        >
            {
                props.data.images &&
                <img
                    data-thumb-mobile={props.data.images.thumb.mobile.link}
                    data-thumb-desktop={props.data.images.thumb.desktop.link}
                    src={props.data.images.share.mobile.link}
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
        : <LoadingIcon />
}

export default NewsArticleItem; 
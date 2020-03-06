// Frameworks & Libraries
import React from 'react';

// Custom Components

// Styling
import styles from './ArticleItem.module.css';

const ArticleItem = props => {
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
                    src={props.data.images.thumb.mobile.link}
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
        : <h1>Loading</h1>
}

export default ArticleItem; 
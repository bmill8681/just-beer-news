// Frameworks & Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosBeer, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// Custom Components

// Styling
import styles from './ViewHeader.module.css';

/*  Header Items for the views
 *  props - 
 *      forward: bool - if present, will display the forward arrow icon
 *      back: bool - if present, will display the back arrow icon
 *      text: string - Heading description
 *      linkText: string - Text to display in the link 
 *      link: string - route/path to link to
 */
const ViewHeader = props => {
    return (
        <header className={styles.Header}>
            <IoIosBeer
                style={{ fontSize: "1.5em", margin: "0px 5px" }}
                className={styles.Center}
            />
            <h1 className={[styles.H1, styles.Center].join(' ')}>
                {props.text}
        </h1>
            <Link to={props.link} className={styles.ReadMoreButton}>
                {props.forward && <IoIosArrowForward
                    style={{ fontSize: "1.5em", margin: "0px 5px" }}
                    className={styles.Center}
                />}
                {props.back && <IoIosArrowBack
                    style={{ fontSize: "1.5em", margin: "0px 5px" }}
                    className={styles.Center}
                />}
                <h2 className={[styles.H2, styles.Center].join(' ')} >
                    {props.linkText}
                </h2>
            </Link>
        </header>
    )
}

export default ViewHeader;
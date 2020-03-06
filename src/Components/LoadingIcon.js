// Frameworks && Libraries
import React from 'react';
import { IoIosBeer } from 'react-icons/io';
// Styling
import styles from './LoadingIcon.module.css';

/*  Loading Icon
 *  Pint of Beer Icon that shakes. Could be modified to accept Icon Props for use elsewhere.
 */
const LoadingIcon = props => {
    return (
        <div className={styles.LoadingIcon}>
            <IoIosBeer />
        </div>
    )
}

export default LoadingIcon;
// Frameworks && Libraries
import React from 'react';
import { IoIosBeer } from 'react-icons/io';

// Custom Components

// Styling
import styles from './LoadingIcon.module.css';

const LoadingIcon = props => {
    return (
        <div className={styles.LoadingIcon}>
            <IoIosBeer />
        </div>
    )
}

export default LoadingIcon;
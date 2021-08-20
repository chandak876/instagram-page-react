import React from 'react';

// styles
import styles from "./loader.module.css";

function Loader() {
    return (
        <div className={`full-height full-width ${styles.loader}`}>
            Loading...
        </div>
    );
}

export default Loader;
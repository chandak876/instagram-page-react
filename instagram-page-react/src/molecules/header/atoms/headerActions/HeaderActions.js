import React from 'react';

// Lodash
import _map from 'lodash/map';

// Styles
import styles from "./headerActions.module.css";

// constants
import {EMPTY_OBJECT} from "../../../../app.constants";
import HEADER_ACTION_CONFIGS from "./constants/headerActions.configs";

const renderHeaderAction = (headerAction = EMPTY_OBJECT) => {
    const {
        linkTo,
        id,
        actionText,
        className
    } = headerAction;

    return (
        <a key={id}
            className = {`${styles.actionButton} ${className}`}
            href = {linkTo}
        >{actionText}</a>
    );
}

function HeaderActions() {
    return (
        <div className={styles.actions}>
            {_map(HEADER_ACTION_CONFIGS, renderHeaderAction)}
        </div>
    );
}

export default HeaderActions;
import React, {useCallback} from 'react';
import cx from 'classnames'
import PropTypes from "prop-types";

// Lodash
import _noop from 'lodash/noop';

// Styles
import styles from './profileTabbarTab.module.css'

function ProfileTabbarTab(props) {
    const {
        imageSrc,
        text,
        isSelected,
        altText,
        id,
        handleProfileTabbarClick,
    } = props;

    const handleProfileTabbarTabClick = useCallback(() => {
        handleProfileTabbarClick(id);
    }, [handleProfileTabbarClick, id])

    const groupTabbarTabClassName = cx(
        styles.profileTabbarTab,
        {
            [styles.profileTabbarTabSelected]: isSelected,
        }
    )

    const groupTabbarTabTextClassname = cx(
        styles.profileTabbarTabText,
        {
            [styles.profileTabbarTabTextSelected]: isSelected,
        }
    )

    return (
        <div onClick={handleProfileTabbarTabClick} className={groupTabbarTabClassName}>
            <img alt={altText}
                 className={styles.profileTabbarTabIcon}
                 src={imageSrc}
            />
            <h4 className={groupTabbarTabTextClassname}>{text}</h4>
        </div>
    );
}

ProfileTabbarTab.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    altText: PropTypes.string,
    id: PropTypes.string.isRequired,
    handleProfileTabbarClick: PropTypes.func,
};

ProfileTabbarTab.defaultProps = {
    isSelected: false,
    altText: undefined,
    handleProfileTabbarClick: _noop,
}

export default ProfileTabbarTab;
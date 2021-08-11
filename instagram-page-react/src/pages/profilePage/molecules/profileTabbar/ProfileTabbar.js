import React, {useCallback, useState} from 'react';

// Lodash
import _map from 'lodash/map';

// Styles
import styles from './profileTabbar.module.css'

// Constants
import PROFILE_TABBAR_CONFIG, {POSTS_CONFIG} from "./constants/profileTabbar.configs";

// Components
import ProfileTabbarTab from "./atoms/profileTabbarTab";

function ProfileTabbar() {
    const [selectedTabId, setSelectedTabId] = useState(POSTS_CONFIG.id);

    const handleProfileTabbarClick = useCallback((tabID) => {
        setSelectedTabId(tabID);
    }, [])

    const renderProfileTabbar = (tab) => {
        const{
            id,
            imageSrc,
            text,
            altText
        } = tab;

        return <ProfileTabbarTab
            key = {id}
            imageSrc = {imageSrc}
            text = {text}
            altText = {altText}
            id = {id}
            isSelected = {selectedTabId === id}
            handleProfileTabbarClick = {handleProfileTabbarClick}
        />;
    }

    return (
        <div className={styles.profileTabbar}>
            {_map(PROFILE_TABBAR_CONFIG, renderProfileTabbar)}
        </div>
    );
}

export default ProfileTabbar;
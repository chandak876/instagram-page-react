import React from 'react';
import {useDispatch} from "react-redux";

// Containers
import './profileTabbar.css'
import '../../../../organisms/loginPopup/loginPopup.css'
import loginPopupAction from "../../../../actions/handleLoginPopup.actions";

function ProfileTabbar(props) {
    const loginPopupDispatch = useDispatch();

    const handleLoginPopup = () => {
        loginPopupDispatch(loginPopupAction(true))
    }

    const renderProfileTabbarTabSelected = () => {
        return (
            <div className="profile-tabbar-tab profile-tabbar-tab-selected">
                <img alt="profile-tabbar-tab-icon" className="profile-tabbar-tab-icon" src="/assets/icons/grid.png"/>
                <h4 className="profile-tabbar-tab-text profile-tabbar-tab-text-selected">POSTS</h4>
            </div>
        );
    }

    const renderProfileTabbarTab = () => {
        return (
            <div onClick = {handleLoginPopup} className="profile-tabbar-tab">
                <img alt="profile-tabbar-tab-icon" className="profile-tabbar-tab-icon" src="/assets/icons/tagged.png"/>
                <h4 className="profile-tabbar-tab-text">TAGGED</h4>
            </div>
        );
    }
    return (
        <div className="profile-tabbar">
            {renderProfileTabbarTabSelected()}
            {renderProfileTabbarTab()}
        </div>
    );
}

export default ProfileTabbar;
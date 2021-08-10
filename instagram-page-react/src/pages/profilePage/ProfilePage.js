import React from 'react';

// Containers
import Header from '../../organisms/header'
import Profile from './organisms/profile'
import ProfileTabbar from './organisms/profileTabbar'
import Posts from './organisms/posts'
import LoginPopup from '../../organisms/loginPopup'

import './profilePage.css'

function ProfilePage() {
    return (
        <div>
            <Header/>
            <Profile/>
            <ProfileTabbar/>
            <Posts/>
            <LoginPopup/>
        </div>
    );
}

export default ProfilePage;
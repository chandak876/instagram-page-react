import React from 'react';
import { useSelector, useDispatch } from "react-redux";

// Containers
import './loginPopup.css'
import InputBar from "../../atoms/inputBar";
import InstagramLogo from "../../atoms/instagramLogo";
import loginPopupAction from "../../actions/handleLoginPopup.actions";

function LoginPopup() {
    const loginPopupState = useSelector(state => state.openLoginPopup);
    const loginPopupDispatch = useDispatch();

    const handleCloseButtonClick = () => {
        loginPopupDispatch(loginPopupAction(0))
    }

    const handleLoginPopupClick = (event) => {
        const isClickInsideLoginPopup = event.target.closest('.login')

        if(!isClickInsideLoginPopup){   // Handles if click is outside the popup-box
            loginPopupDispatch(loginPopupAction(0));
        }
    }

    const renderLoginPopupHeaderText = () => {
        return <p className="login-popup-header-text">Log in to connect with your world on Instagram</p>;
    }

    const renderLoginHeader = () => {
        return (
            <div className="login-header">
                <InstagramLogo styleName="login-logo"/>
                <button onClick = {handleCloseButtonClick} className="login-popup-close">&times;</button>
            </div>
        );
    }

    const renderLoginFormInput = () => {
        return (
            <div>
                <InputBar placeholderText = "Phone number, username, or email" />
                <InputBar placeholderText = "Password" />
                <a href="#" className="login-button">Log In</a>
            </div>
        );
    }

    const renderLoginFormSeperator = () => {
        return (
            <div className="login-seperator">
                <p className="login-seperator-line"></p>
                <p className="login-seperator-text">OR</p>
                <p className="login-seperator-line"></p>
            </div>
        );
    }

    const renderLoginFacebook = () => {
        return (
            <div className="login-facebook">
                <img className="login-facebook-icon" src="./images/facebook_icon.png" />
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221b7i6m013rl54a1ay9cub1gxy3yfvry17w8uo56jywson81e8b6p0%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dca5d47d8-9632-4b35-9c4c-0ad7824afb76%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221b7i6m013rl54a1ay9cub1gxy3yfvry17w8uo56jywson81e8b6p0%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%23_%3D_&display=page&locale=hi_IN&pl_dbl=0"
                   className="login-facebook-text">Log in with Facebook</a>
            </div>
        );
    }

    const renderForgotPassword = () => {
        return <a href="https://www.instagram.com/accounts/password/reset/" className="login-forgot-password">Forgot password?</a>;
    }

    const renderSignUpSection = () => {
        return (
            <div className="login-signup">
                <center><p className="login-signup-text">Don't have an account? <a href="./signup-page" className="login-signup-button">Sign up</a></p></center>
            </div>
        );
    }

    const renderLoginForm = () => {
        return (
            <div className="login">
                {renderLoginHeader()}
                {renderLoginFormInput()}
                {renderLoginFormSeperator()}
                {renderLoginFacebook()}
                {renderForgotPassword()}
                {renderSignUpSection()}
            </div>
        );
    }

    return (
        <div onClick={handleLoginPopupClick} className = {loginPopupState.loginPopup ? "login-popup active": "login-popup" }>
            {renderLoginPopupHeaderText()}
            {renderLoginForm()}
        </div>
    );
}

export default LoginPopup;
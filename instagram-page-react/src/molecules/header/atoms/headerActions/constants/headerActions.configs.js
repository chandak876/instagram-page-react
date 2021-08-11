import styles from '../headerActions.module.css'

const LOGIN_ACTION_CONFIG = {
    id: 'LOGIN',
    actionText: 'Login',
    linkTo: 'https://www.instagram.com/accounts/login/?next=%2Felonrmuskk%2F&source=desktop_nav',
    className: styles.actionLogin,
}

const SIGNUP_ACTION_CONFIG = {
    id: 'SIGNUP',
    actionText: 'Sign Up',
    linkTo: 'https://www.instagram.com/accounts/emailsignup/',
    className: styles.actionSignup,
}

const HEADER_ACTION_CONFIGS = [
    LOGIN_ACTION_CONFIG,
    SIGNUP_ACTION_CONFIG
]

export default HEADER_ACTION_CONFIGS;
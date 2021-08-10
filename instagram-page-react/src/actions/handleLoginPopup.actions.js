const handleLoginPopup = (loginPopup) => {
    return {
        type: "LOGIN_POPUP",
        payload: loginPopup
    };
}

export default handleLoginPopup;
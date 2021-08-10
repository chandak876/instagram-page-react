const initialState = {
    loginPopup: 0
}

const loginPopupReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_POPUP": return {
            loginPopup: action.payload
        };

        default: return state;
    }
}

export default loginPopupReducer;
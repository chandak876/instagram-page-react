import { combineReducers } from "redux";

// Containers
import loginPopupReducer from "./loginPopup.reducer";

export default combineReducers({
    openLoginPopup: loginPopupReducer,
});
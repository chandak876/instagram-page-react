import { combineReducers } from 'redux';

// reducer
import postListReducer from "./profilePage.posts";

const reducersMap = {
    posts: postListReducer,
}

const profilePageReducer = combineReducers(reducersMap);

export default profilePageReducer;

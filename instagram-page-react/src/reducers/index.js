import { combineReducers } from 'redux';

// reducers
import {profilePageReducer} from '../pages/profilePage'

export const reducersMap = {
    profilePage: profilePageReducer,
}

const rootReducer = combineReducers(reducersMap);

export default rootReducer;

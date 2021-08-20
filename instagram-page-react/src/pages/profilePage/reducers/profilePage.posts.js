import produce from 'immer';
import {handleActions} from 'redux-actions';

// lodash
import _get from 'lodash/get';

// constants
import { EMPTY_ARRAY } from "../../../app.constants";

// actionTypes
import ACTION_TYPES from "./actionTypes/profilePage.posts";

const INITIAL_STATE = {
    data: EMPTY_ARRAY,
}

const handleSavePosts = produce((state, action) => {
    state.data = _get(action, 'payload.posts');
})

const HANDLERS = {
    [ACTION_TYPES.SAVE_POSTS]: handleSavePosts,
}

export default handleActions(HANDLERS, INITIAL_STATE);
import { createAction } from 'redux-actions';

// constants
import ACTION_TYPES from "../../reducers/actionTypes/profilePage.posts";

export const saveProfilePagePostsAction = createAction(
    ACTION_TYPES.SAVE_POSTS,
    posts => ({posts}),
)

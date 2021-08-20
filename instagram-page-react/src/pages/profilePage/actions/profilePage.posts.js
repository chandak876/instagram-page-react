import { compose } from 'recompose';

// services
import { fetchProfilePagePosts } from "../services/profilePage.posts";

// actions
import { saveProfilePagePostsAction } from "./actionCreators/profilePage.posts";

const handleFetchPostsSuccess = (dispatch, posts) => {
    compose(
        dispatch,
        saveProfilePagePostsAction
    )(posts);
};

const handleFetchPostsError = (err) => {
    alert(err.message);
};

export const fetchPosts = () => {
    return (dispatch) => {
        return fetchProfilePagePosts()
        .then((posts) => handleFetchPostsSuccess(dispatch, posts))
        .catch(handleFetchPostsError);
    };
}

import { compose } from 'recompose';
import { createSelector } from 'reselect'

// lodash
import _property from 'lodash/property';

// utils
import immutablyReverse from "../../../../utils/immutablyReverse";

const getProfilePageState = _property('profilePage');

const getPostListState = compose(
    _property('posts'),
    getProfilePageState
);

export const getPosts = compose(
    _property('data'),
    getPostListState
);

export const getReversedPosts = createSelector(
    [getPosts],
    immutablyReverse
);

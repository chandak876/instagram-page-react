import { compose } from 'recompose';

// lodash
import _property from 'lodash/property';

const getProfilePageState = _property('profilePage');

const getPostListState = compose(
    _property('posts'),
    getProfilePageState
);

export const getPosts = compose(
    _property('data'),
    getPostListState
);

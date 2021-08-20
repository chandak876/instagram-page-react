import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

// lodash
import _map from 'lodash/map';
import _noop from 'lodash/noop';

// styles
import styles from './posts.module.css';

// components
import Loader from "../../../../atoms/loader";
import Post from "./molecules/post";

// selectors
import { getPosts } from "../../reducers/selectors/profilePage.posts";

// actionCreators
import {
    fetchPosts as fetchPostsAction
} from "../../actions/profilePage.posts";


const renderPost = (post) => {
    const{
        id,
        postPath
    } = post;

    return <Post
        key={id}
        postPath={postPath}
    />;
}

function Posts(props) {
    const {
        posts,
        fetchPosts
    } = props;

    const [arePostsLoaded, setArePostsLoaded] = useState(false);
    const setPostsLoaded = () => setArePostsLoaded(true);

    useEffect( () => {
        fetchPosts().finally(setPostsLoaded);
    }, [])

    if(!arePostsLoaded) return (
        <Loader />
    )

    return (
        <div className={styles.posts}>
            {_map(posts, renderPost)}
        </div>
    );
}

const mapStateToProps = (state) => ({
    posts: getPosts(state),
});

const mapDispatchToProps = {
    fetchPosts: fetchPostsAction,
};

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func,
};

Posts.defaultProps = {
    fetchPosts: _noop,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

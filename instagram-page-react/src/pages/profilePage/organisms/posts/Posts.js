import React, {useEffect, useState} from 'react';

// Lodash
import _map from 'lodash/map';

//Styles
import './posts.css'

// Containers
import DisplayPost from "../../../../molecules/displayPost";

function Posts() {
    const [postsNumber, setPostsNumber] = useState([]);

    useEffect(() => {
        let postNumberArray = [1, 2, 3, 4, 5, 6];        // API calls to Profile Photos will come here.
        setPostsNumber(postNumberArray);
    }, []);

    const renderDisplayPost = (postNumber = 0) => {
        return <DisplayPost key={postNumber} postNumber={postNumber}/>;
    }

    return (
        <div className="posts">
            {_map(postsNumber, renderDisplayPost)}
        </div>
    );
}

export default Posts;
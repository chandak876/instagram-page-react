import React, {useEffect, useState} from 'react';

// Containers
import DisplayPost from "../../../../molecules/displayPost";
import './posts.css'

function Posts() {
    const [postsNumber, setPostsNumber] = useState([]);

    useEffect(() => {
        let postNumberArray = [1, 2, 3, 4, 5, 6];        // API calls to Profile Photos will come here.
        setPostsNumber(postNumberArray);
    }, []);

    const renderDisplayPost = (postNum) => {
        return <DisplayPost postNum = {postNum}/>;
    }

    return (
        <div className="posts">
            {postsNumber.map(postNum => renderDisplayPost(postNum))}
        </div>
    );
}

export default Posts;
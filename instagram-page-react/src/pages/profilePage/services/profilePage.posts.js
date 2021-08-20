// constants
import POSTS from "../constants/posts.data";

// probability of data getting successfully fetched.
const SUCCESS_RATE = 0.98;

export const fetchProfilePagePosts = () => {
    return new Promise(function (resolve, reject) {
        const randomNumber = Math.random();

        if (randomNumber <= (1 - SUCCESS_RATE)) {
            reject(new Error("Failed to load posts"));
        }

        resolve(POSTS);
    });
}

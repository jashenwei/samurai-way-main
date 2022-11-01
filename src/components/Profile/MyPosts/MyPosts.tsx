import React from "react";
import Prof from './MyPosts.module.css';
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <div className={Prof.postsBlock}>
            <h3>my posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
            <div>
                new posts
            </div>
            <div className={Prof.posts}>
                <Post message='hi, how are you' likesCount="0"/>
                <Post message='okey, lets go' likesCount="23"/>
            </div>
        </div>
    );
};

import React from "react";
import Prof from './MyPosts.module.css';
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <div>
            my posts
            <textarea></textarea>
            <button>add post</button>
            <div>
                new posts
            </div>
            <div className={Prof.posts}>
                <Post message='hi, how are you' likesCount="0" />
                <Post message='okey, lets go' likesCount="23"/>
            </div>
        </div>
    );
};

import React from "react";
import Prof from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {PostType} from '../../../redux/state';

type MyPostsTypeProps = {
    posts:PostType[]
}

export const MyPosts = (props:MyPostsTypeProps) => {

    let postsElements=
     props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    );
};

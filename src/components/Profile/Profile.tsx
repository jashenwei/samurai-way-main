import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from '../../redux/state';

type PropsType = {
    posts: PostType[]
}

export const Profile = (props:PropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    );
};
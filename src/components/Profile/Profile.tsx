import React from "react";
import Prof from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={Prof.content}>
            <img src='https://i.pinimg.com/originals/3c/ab/43/3cab434622d9fabfde2f46e9a51380d6.gif' alt=''/>
            <div>
                avaDesc
            </div>
            <MyPosts />
        </div>
    );
};
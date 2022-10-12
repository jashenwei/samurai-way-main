import React from "react";
import Prof from './Post.module.css';


type MessageProps = {
    message:string,
    likesCount:string
}

export const Post = (props:MessageProps) => {
    return (
        <div className={Prof.item}>
            <img
                src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg'
                alt='avatar'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};

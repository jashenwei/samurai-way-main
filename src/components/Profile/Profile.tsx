import React from "react";
import Prof from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={Prof.content}>
            <img src='https://i.pinimg.com/originals/3c/ab/43/3cab434622d9fabfde2f46e9a51380d6.gif' alt=''/>
            <div>
                avaDesc
            </div>
            <div>
                my posts
                <div>
                    new posts
                </div>
                <div className={Prof.posts}>
                    <div className={Prof.item}>
                        post 1
                    </div>
                    <div className={Prof.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

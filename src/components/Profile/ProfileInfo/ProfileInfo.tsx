import React from "react";
import Prof from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={Prof.img}
                     src='https://i.pinimg.com/originals/3c/ab/43/3cab434622d9fabfde2f46e9a51380d6.gif' alt=''/>
            </div>
            <div className={Prof.descBlock}>
                avaDesc
            </div>
        </div>

    );
};
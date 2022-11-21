import React from 'react';
import s from '../Dialogs.module.css';
import {MessageTypeProps} from '../Dialogs';

export const Message = (props: MessageTypeProps) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
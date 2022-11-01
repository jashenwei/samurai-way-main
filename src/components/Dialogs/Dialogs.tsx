import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogsType = {
    id:string
    name:string
    message:string
}
type DialogItemProps = {
    id:string
    name:string
}
type MessageTypeProps = {
    message:string
}

const DialogItem = (props:DialogItemProps) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:MessageTypeProps) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export const Dialogs = (props:DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Ivan' id='1'/>
                <DialogItem name='Sasha' id='2'/>
                <DialogItem name='Alex' id='3'/>
                <DialogItem name='Sveta' id='4'/>
                <DialogItem name='Dimych' id='5'/>
                <DialogItem name='Jon' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='yo-yo-yo!'/>
                <Message message='how are you?'/>
            </div>
        </div>
    );
}
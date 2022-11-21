import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from './DialogItem/DialogsItem'
import {Message} from './Message/Message';
import {DialogType, MessageType} from '../../redux/state';

export type DialogItemProps = {
    id: number
    name: string
}

export type MessageTypeProps = {
    message: string
}

type DialogsProps = {
    dialogs: Array<DialogType>
    messages: MessageType[]
}

export const Dialogs = (props: DialogsProps) => {



    let dialogsElements = props.dialogs
        .map(d => <DialogsItem id={d.id} name={d.name}/>)

    let messagesElements = props.messages
        .map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                {
                    messagesElements
                }
            </div>
        </div>
    );
}
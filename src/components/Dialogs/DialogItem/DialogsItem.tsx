import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {DialogItemProps} from '../Dialogs';

export const DialogsItem = (props: DialogItemProps) => {

            let path = '/dialogs/' + props.id
            return (
            <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
            </div>

    );
};

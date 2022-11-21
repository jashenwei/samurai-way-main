import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Navbar/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from './redux/state';

type AppPropsType = {
    state: RootStateType
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={ () => <Dialogs dialogs = {props.state.dialogsPage.dialogs} messages = {props.state.dialogsPage.messages} />}/>
                    <Route path={'/profile'} render={ () => <Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/settings'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
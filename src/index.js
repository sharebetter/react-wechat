import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom'
import Login from './container/login/login';
import Register from './container/register/register';
import BossInfo from './container/userInfo/bossInfo';
import JobSeekerInfo from './container/userInfo/jobSeekerInfo';

import reducers from './reducer';
import './config';
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension():f=>f
))
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}></Route>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/bossInfo" component={BossInfo} />
                <Route path="/jobSeekerInfo" component={JobSeekerInfo} />
            </Switch>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);


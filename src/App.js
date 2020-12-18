import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import MainPage from './scenes/MainPage';
import Temps from './scenes/Temps';


import './App.css';

const App = () => {
    return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/signIn" component={Temps} />
                </Switch>
            </HashRouter>
    );
};

export default App;

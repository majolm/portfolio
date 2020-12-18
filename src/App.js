import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from './scenes/MainPage';
import Temps from './scenes/Temps';


import './App.css';

const App = () => {
    return (
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/signIn" component={Temps} />
                </Switch>
            </Router>
    );
};

export default App;

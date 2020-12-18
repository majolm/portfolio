import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './scenes/MainPage';
import Temps from './scenes/Temps';
// import { NavBar, Footer } from '@components';

import './App.css';

const App = () => {
    return (
            /* <NavBar /> */
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/signIn" component={Temps} />
            </Switch>
            /* <Footer /> */
    );
};

export default App;

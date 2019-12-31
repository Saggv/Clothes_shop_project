import React from 'react';
import './App.scss';
import Navigation from './Component/Navigation';
import Detail from './Page/Detail';
import Home from "./Page/Home";
import Show from './Page/Show';
import Profile from './Page/Profile';
import Manshop from './Page/Manshop';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import configStore from "./Redux/ConfigStore";
import WomenShop from './Page/WomenShop';

const store = configStore();

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Navigation></Navigation>
            <Switch>
                <Route path="/manshop"><Manshop></Manshop></Route>
                <Route path="/womenshop"><WomenShop></WomenShop></Route>
                <Route path="/show"><Show></Show></Route>
                <Route path="/aboutme"><Profile></Profile></Route>
                <Route path="/detail/:name.:forMen.:id.html"><Detail></Detail></Route>
                <Route path="/" exact><Home></Home></Route>
            </Switch>
        </Router>
    </Provider>
  );
}

export default App;

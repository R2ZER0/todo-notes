// @flow
import * as React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Page from "./Page";

const App = () => (
    <Router>
        <div>
            <Route exact path="/" render={ () => <Page/> }/>
            <Route path="/note/:id" render={ ({match}) => <Page/> }/>
        </div>
    </Router>
);

export default App;

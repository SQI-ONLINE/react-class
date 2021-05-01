import React, { useState } from 'react';
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//pages
import Home from './Home';
import About from './About';
import Error from './Error';
import FormClass from './class-4';
import UserDetails from './UserDetails';
import EffectClass from './Effect';
import ContextClass from './ContextClass';
import ReducerClass from './ReducerClass';

import ReduxClass from './ReduxClass';
import APIClass from './api-class';

import Dashboard from './Dashboard'
import GuardRoute from './GuardRoute';

import Notebook from './class-component';

const App = () => {
    let [age, setAge] = useState(15);


    return (
        <>
            <ReducerClass />
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/about/test">

                    </Route>
                    <Route path="/users">
                        <FormClass />
                    </Route>
                    <Route path="/effect-class">
                        <EffectClass />
                    </Route>
                    <Route path="/context-class">
                        <ContextClass />
                    </Route>
                    <Route path="/reducer-class">
                        <ReducerClass />
                    </Route>

                    {/* ALL APP ROUTE GOES HERE */}
                    <Route path="/app">
                        <MainApp />
                    </Route>


                    <GuardRoute path="/dashboard" component={Dashboard} condition={age >= 18} />

                    <Route path="/user/:name" children={<UserDetails />}></Route>

                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;
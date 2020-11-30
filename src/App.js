import React from 'react';
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//pages
import Home from './Home';
import About from './About';
import Error from './Error';
import FormClass from './class-4';
import UserDetails from './UserDetails';
import EffectClass from './Effect'


const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <FormClass />
                    </Route>
                    <Route path="/effect-class">
                        <EffectClass />
                    </Route>

                    <Route path="/user/:name" children={<UserDetails />}></Route>

                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
            {/* <Navbar /> */}
        </>
    )
}

export default App;
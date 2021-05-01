import React from 'react'
import {BrowserRouter as Switch, Route, Router} from 'react-router-dom';

export default function MainApp() {
    return (
        <div>
                <Router>
                <Navbar />
                <Switch>
                    <Route path="/app/profile">
                        <Profile />
                    </Route>
                    <Route path="/app/history">
                        <History />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

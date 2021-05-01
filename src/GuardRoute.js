import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const GuardRoute = ({ component: Component, condition, ...theRemainingProps }) => {
    return (
        <Route {...theRemainingProps} render={() => {
            return condition ? <Component /> : <Redirect to="/" />
        }}
        />
    )
}

export default GuardRoute;

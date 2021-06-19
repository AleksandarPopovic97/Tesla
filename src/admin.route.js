import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';

export const AdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAdmin()) {
                    return <Component {...props} />;
                } else {
                    console.log(props);
                    // console.log(rest);

                    return <Redirect to={props.history.goBack()} />
                }
            }}
        />
    );
}
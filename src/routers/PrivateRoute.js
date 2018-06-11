import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
export const PrivateRoute = ({ 
    isAuthenticated,  //equals to isAuthenticated = props.isAuthticated.
    component: Component, // equals to component = props.component, and then
    ...rest                 // give component a new name: Component
}) => {
    return (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
            <Header />
            <Component {...props} /></div>
        ) : (
            <Redirect to="/" />
        )
    )}/>
);
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);

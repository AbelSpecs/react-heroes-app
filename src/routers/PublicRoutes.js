import React from 'react'
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom'

export const PublicRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest //operador rest
}) => {

    const lastpage = localStorage.getItem('lastpath', rest.location.pathname);

    return (
        <Route {...rest}
            component={ (props) => (
                 (!isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to={`${lastpage}`} />)
            )}
        
        
        />
    )
}

PublicRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
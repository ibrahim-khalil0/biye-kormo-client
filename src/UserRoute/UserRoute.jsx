import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const UserRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <span className="">Loading</span>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>;
};

export default UserRoute;
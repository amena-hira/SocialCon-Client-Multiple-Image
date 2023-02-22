import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import loadingGif from '../images/loading.gif';

const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(loading);

    if (loading) {
        return <div className='flex justify-center'><img src={loadingGif} style={{height: '80px'}} alt="spinner" /></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
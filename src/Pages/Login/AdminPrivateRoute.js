import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const AdminPrivateRoute = ({children}) => {
    const [user,loading]=useAuthState(auth)
    const {admin,loadingAdmin}=useAdmin(user)
    const location=useLocation()
    if(loading || loadingAdmin){
        return ;
    }
    if(!user || !admin){
        toast.error("Your are not an admin ,please change the route and login again")
        signOut(auth)
        return <Navigate to="/login" state={{from:location}} replace />
    }
    return children
};

export default AdminPrivateRoute;
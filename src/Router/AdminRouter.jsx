import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Provider/Authprovider';

const AdminRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <div className='text-center   container mx-auto  px-16 py-36 mt-16'>
            
        <progress className="progress w-56"></progress>
        <h1 className=' text-7xl'>Looding.....................</h1>
    </div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRouter;
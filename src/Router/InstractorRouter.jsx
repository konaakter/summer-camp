import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useInstractor from '../hooks/useInstractor';
import { AuthContext } from '../Provider/Authprovider';

const InstractorRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
   const [isInstractor, isInstractorLoading] = useInstractor()
    const location = useLocation();

    if(loading || isInstractorLoading){
        return <div className='text-center   container mx-auto  px-16 py-36 mt-16'>
            
        <progress className="progress w-56"></progress>
        <h1 className=' text-7xl'>Looding.....................</h1>
    </div>
    }

    if (user && isInstractor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstractorRouter;
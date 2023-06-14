import { useContext } from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/Authprovider";

const Privaterouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return  <div className='text-center   container mx-auto  px-16 py-36 mt-16'>
            
        <progress className="progress w-56"></progress>
        <h1 className=' text-7xl'>Looding.....................</h1>
    </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default Privaterouter;
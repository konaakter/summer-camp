import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/Authprovider';
import { useQuery } from '@tanstack/react-query';

const useInstractor = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstractor, isLoading: isInstractorLoading} = useQuery({
        queryKey: ['isInstractor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instractor/${user?.email}`);
            console.log('is admin response', res)
            return res.data.instractor;
        }
    })
    return [isInstractor, isInstractorLoading]
};

export default useInstractor;
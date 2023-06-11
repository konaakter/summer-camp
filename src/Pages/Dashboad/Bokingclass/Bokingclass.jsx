import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/Authprovider';

const Bokingclass = () => {
    const { user } = useContext(AuthContext)



    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments ', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/payments?email=${user?.email}`)
            return response.json()

        },
    })

    return (
        <div>
            {
                payments.map(payments =>
                    <h1>{payments.artCraftName}</h1>
                    )
            }
            
        </div>
    );
};

export default Bokingclass;
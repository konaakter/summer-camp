
import React from 'react';
import {
    useQuery,
    
  } from '@tanstack/react-query'
 

const Populerclass = () => {
    

    const { refetch, data: allclass = [] } = useQuery({
        queryKey: ['allclass'],
        queryFn: async () => {
            const response = await fetch('https://summer-camp-server-navy-omega.vercel.app/allclass')
            return response.json()

        },
    })
    return(
        <div>
            {
                allclass.length
            }
           
        </div>
    )
};

export default Populerclass;
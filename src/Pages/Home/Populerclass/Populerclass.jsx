
import React from 'react';
import {
    useQuery,
    
  } from '@tanstack/react-query'
 

const Populerclass = () => {
    

    const { refetch, data: allclass = [] } = useQuery({
        queryKey: ['allclass'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/allclass')
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
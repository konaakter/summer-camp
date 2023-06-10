import { useQuery } from '@tanstack/react-query';
import React from 'react';

import ApproveClasscard from './ApproveClasscard';

const ApproveClass = () => {
    

    const { refetch, data: approveclass = [] } = useQuery({
        queryKey: ['approveclass '],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/approveclass')
            return response.json()

        },

    })
    /*const {_id, image, artCraftName, price, totalSeats, bookSeats, instructorName, instructorEmail} = approveclass

    console.log( 
        )*/

    
    return (

        <div className=' grid grid-cols-3 gap-10 container mx-auto my-24'>
            {
                approveclass.map(approveclass =>
                    <ApproveClasscard
                    approveclass={approveclass}
                    refetch={ refetch}

                    ></ApproveClasscard>
                
                    
                )
            }


        </div>
    );
};

export default ApproveClass;
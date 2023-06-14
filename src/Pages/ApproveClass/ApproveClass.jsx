import { useQuery } from '@tanstack/react-query';
import React from 'react';

import ApproveClasscard from './ApproveClasscard';

const ApproveClass = () => {
   

    const { refetch, data: approveclass = [] } = useQuery({
        queryKey: ['approveclass '],
        queryFn: async () => {
            const response = await fetch('https://summer-camp-server-navy-omega.vercel.app/approveclass')
            return response.json()

        },

    })
    /*const {_id, image, artCraftName, price, totalSeats, bookSeats, instructorName, instructorEmail} = approveclass

    console.log( 
        )*/

    
    return (
        <div className=' pt-36 py-20'>
            <div className="mx-auto text-center md:w-4/12 mb-10">
                    <div className='  '>
                        <hr />

                        <p className=" mb-2 uppercase"> Acitivies</p>
                        <hr />
                    </div>

                    <h1 className="text-3xl uppercase text-green-500  py-4">Our Activites</h1>
                </div>

        <div className=' grid grid-cols-3 gap-10 container mx-auto '>
            {
                approveclass.map(approveclass =>
                    <ApproveClasscard
                    approveclass={approveclass}
                    refetch={ refetch}

                    ></ApproveClasscard>
                
                    
                )
            }


        </div>
        </div>
    );
};

export default ApproveClass;
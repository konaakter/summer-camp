import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

import Allclasscard from './Allclasscard';

const AllClasss = () => {


    const [axiosSecure] = useAxiosSecure();
    const [diasble, setdiasble] = useState(true);


    const { refetch, data: allcllass = [] } = useQuery({
        queryKey: ['/allcllass'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allcllass')
            return res.data

        },
    })

   
         
 

    /*const handleapprove = allcllass => {
        fetch(`https://summer-camp-server-navy-omega.vercel.app/allcllass/approve/${allcllass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ' This class is Approve!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    const handleDeny = allcllass => {
        fetch(`https://summer-camp-server-navy-omega.vercel.app/allcllass/deny/${allcllass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ' This class is denay!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handlefeadback = async allcllass => {
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Message',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true
        })

        if (text) {
            const feed = text

            fetch(`https://summer-camp-server-navy-omega.vercel.app/allcllass/feedback/${allcllass._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ feedback: text })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Feadbeck is strore Now!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

            //Swal.fire(text)
        }
    }*/

    return (
        <div className=' w-9/12 mx-auto'>
            <div className="mx-auto text-center md:w-4/12 pb-6 ">
                <div className='  '>
                    <hr />

                    <p className=" mb-2 uppercase">All class</p>
                    <hr />
                </div>

                <h1 className="text-3xl uppercase text-green-500  py-4">Manage Classes</h1>
            </div>
            <div className=' grid grid-cols-2 gap-10'>
                {
                    allcllass.map((allcllass, index) =>

                       <Allclasscard
                       allcllass={allcllass}
                       refetch={ refetch}
                       ></Allclasscard>



                    )
                }

            </div>
        </div>
    );
};

export default AllClasss;
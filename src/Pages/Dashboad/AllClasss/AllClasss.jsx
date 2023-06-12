import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllClasss = () => {


    const [axiosSecure] = useAxiosSecure();


    const { refetch, data: allcllass = [] } = useQuery({
        queryKey: ['/allcllass'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allcllass')
            return res.data

        },
    })

    const handleapprove = allcllass => {
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
                        title: `${allcllass.name} is a Approve Now!`,
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
                        title: `${allcllass.name} is a Deny Now!`,
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
            const feed =  text

            fetch(`https://summer-camp-server-navy-omega.vercel.app/allcllass/feedback/${allcllass._id}`, {
                method: 'PATCH', 
                headers: {
                    'content-type': 'application/json'
                }, 
                body: JSON.stringify({feedback: text})
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${allcllass.name} is a Feadbeck Now!`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

            //Swal.fire(text)
        }
    }

    return (
        <div className=' grid grid-cols-2 gap-10 my-20'>
            {
                allcllass.map((allcllass, index) =>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=600" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {
                                    allcllass.artCraftName
                                }
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div >
                                    {allcllass.status === 'approved' ? 'Approve' :
                                        <button onClick={() => handleapprove(allcllass)} className="badge badge-outline">Approve</button>
                                    }
                                </div>
                                <div >

                                    {allcllass.status === 'Deny' ? 'Deny' :
                                        <button onClick={() => handleDeny(allcllass)} className="badge badge-outline">Deny</button>
                                    }

                                </div>
                                <div >

                                    {  allcllass.feedback ? 'Done' :
                                        <button onClick={() => handlefeadback(allcllass)} className="badge badge-outline">Feedback</button>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>


                )
            }

        </div>
    );
};

export default AllClasss;
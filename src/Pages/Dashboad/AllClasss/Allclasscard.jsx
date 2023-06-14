import React, { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Allclasscard = ({ allcllass, refetch }) => {
    const [diasble, setdiasble] = useState(true);


    
    useEffect(() => {
        if (allcllass.status === 'Deny') {

            setdiasble(false)
        }
        else{
            setdiasble(true)
        }
    }, [allcllass.status === 'Deny'])

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
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl text-white space-y-4s">
                <figure><img src={allcllass.photo} /></figure>
                <div className="card-body bg-orange-400">
                    <h2 className="card-title">
                        {
                            allcllass.artCraftName
                        }
                    </h2>
                    <p>Instructor Name: {allcllass.instructorName}</p>
                    <p> Email: {allcllass.instructorEmail}</p>
                    <div className=' flex gap-6  items-center '>
                        <p>Price: ${allcllass.price}</p>

                        <p>Available seats: {allcllass.totalSeats}</p>

                    </div>
                    <div className="card-actions justify-end mt-6">
                        <div >
                            {allcllass.status === 'approved' ? 'Approve' :
                                <button onClick={() => handleapprove(allcllass)} className=" bg-green-400 px-4  hover:bg-transparent border-green-400 rounded-3xl">Approve</button>
                            }
                        </div>
                        <div >

                            {allcllass.status === 'Deny' ? 'Deny' :
                                <button onClick={() => handleDeny(allcllass)} className=" bg-green-400 px-4 hover:bg-transparent border-green-400 rounded-3xl">Deny</button>
                            }

                        </div>
                        <div >

                            {allcllass.feedback ? 'Done' :
                                <button disabled={diasble} onClick={() => handlefeadback(allcllass)} className=" bg-green-400 px-4  hover:bg-transparent border-green-400 rounded-3xl">Feedback</button>
                            }

                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Allclasscard;
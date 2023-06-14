import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/Authprovider';
import ApproveClass from './ApproveClass';
import useAdmin from '../../hooks/useAdmin';
import useInstractor from '../../hooks/useInstractor';

const ApproveClasscard = ({ approveclass, refetch }) => {
    //const [, refetch] = ApproveClass;
    const { _id, photo, artCraftName, price, totalSeats, bookSeats, instructorName, instructorEmail } = approveclass
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin();
    const [isInstractor] = useInstractor();
    const [dasable, setdesable] = useState(false);
   
    useEffect(() => {
        if (totalSeats == bookSeats || isAdmin || isInstractor) {
            setdesable(true);
        }
       },[totalSeats, bookSeats, isAdmin, isInstractor])
   

    const handlesleleted = approveclass => {
        console.log(approveclass);
        if (user && user.email) {
            const classcard = { approveclassId: _id, photo, artCraftName, price, totalSeats, bookSeats, instructorName, instructorEmail, email: user.email }

            fetch('https://summer-camp-server-navy-omega.vercel.app/sletedclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classcard)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }
    }


    return (
        <div >
        <div className=' relative text-white'>
            <div className=''>
                <img
                    src={approveclass.photo}
                    alt=''
                    className=' object-cover w-full h-56 md:h-64 xl:h-96   rounded-2xl'
                />


            </div>

            <div className= {`absolute w-full ps-6 pb-40 inset-x-0 bottom-0 h-36  bg-opacity-40 
             bg-black space-y-2 ${totalSeats == bookSeats ? 'bg-red-500 bg-opacity-95' : ''}`}>
                <h1 className='  uppercase text-2xl'>{approveclass.artCraftName}</h1>
                <h1 className='  uppercase text-1xl'>{approveclass.instructorName}</h1>
                <div className=' flex gap-6  '>
                    <p>Price: ${approveclass.price}</p>
                    
                    <p>Available seats: {approveclass.totalSeats - approveclass.bookSeats}</p>
                    
                </div>
                

                <button onClick={() => handlesleleted(approveclass)} disabled={dasable}  className=" px-7 py-3  bg-green-500 ">Sletect</button>
            </div>


        </div>
        </div>

    );
};

export default ApproveClasscard;


/*

<button onClick={() => handlesleleted(approveclass)} className="btn btn-primary">Sletect</button>*/
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/Authprovider';
import ApproveClass from './ApproveClass';

const ApproveClasscard = ({ approveclass, refetch }) => {
    //const [, refetch] = ApproveClass;
    const { _id, image, artCraftName, price, totalSeats, bookSeats, instructorName, instructorEmail } = approveclass
    const {user} = useContext(AuthContext)

    const handlesleleted = approveclass => {
        console.log(approveclass);
        if (user && user.email) {
            const classcard = { approveclassId: _id, image, artCraftName, price, totalSeats, bookSeats, instructorName, instructorEmail, email: user.email }

            fetch('http://localhost:5000/sletedclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classcard)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) { 
                        refetch() ;
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
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img src="https://images.pexels.com/photos/8033900/pexels-photo-8033900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {
                        artCraftName
                    }

                </h2>
                <p>{price}</p>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handlesleleted(approveclass)} className="btn btn-primary">Sletect</button>
                </div>
            </div>
        </div>
    );
};

export default ApproveClasscard;
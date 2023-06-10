import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/Authprovider';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const Studentcart = () => {
    const { user } = useContext(AuthContext)
    



    const { refetch, data: sletedclass = [] } = useQuery({
        queryKey: ['sletedclass ', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/sletedclass?email=${user?.email}`)
            return response.json()

        },
    })
    const total = sletedclass.reduce((sum, sletedclass) => sletedclass.price + sum, 0);
    const handleremove = sletedclass => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/sletedclass/${sletedclass._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Class: {sletedclass.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                <button className="btn btn-warning btn-sm">PAY</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    ID
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Delete</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sletedclass.map((sletedclass, index) =>
                                <tr>
                                    <th>
                                        <label>
                                            {
                                                index + 1
                                            }

                                        </label>
                                    </th>
                                    <td>

                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {
                                                        sletedclass.artCraftName
                                                    }
                                                </div>

                                            </div>
                                        </div>

                                    </td>
                                    <td>
                                        {
                                            sletedclass.price
                                        }
                                    </td>
                                    <td>
                                        {
                                            sletedclass.totalSeats
                                        }
                                    </td>
                                    <th>
                                        <button onClick={() => handleremove(sletedclass)} className="btn btn-circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </th>
                                    <th>
                                        <button className="btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                            Pay
                                        </button>
                                    </th>


                                </tr>

                            )
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default Studentcart;
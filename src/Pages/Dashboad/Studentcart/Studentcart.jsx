import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/Authprovider';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Studentcartcad from './Studentcartcad';

const Studentcart = () => {
    const { user } = useContext(AuthContext)
   
    




    const { refetch, data: sletedclass = [] } = useQuery({
        queryKey: ['sletedclass ', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://summer-camp-server-navy-omega.vercel.app/sletedclass?email=${user?.email}`)
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
                fetch(`https://summer-camp-server-navy-omega.vercel.app/sletedclass/${sletedclass._id}`, {
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
                <Link to='/dashboad/payment'> <button className="btn btn-warning btn-sm">PAY</button></Link>
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
                               
                                  <Studentcartcad
                                  sletedclass={sletedclass}
                                  index={index}
                                  handleremove={handleremove}
                                  ></Studentcartcad>
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
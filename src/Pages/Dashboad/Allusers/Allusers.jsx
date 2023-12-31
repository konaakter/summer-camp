import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const Allusers = () => {
    const [axiosSecure] = useAxiosSecure();


    const { refetch, data: user = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data

        },
    })


    const handleAdmin = user =>{
        fetch(`https://summer-camp-server-navy-omega.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }



    const handleinstractor = user =>{
        fetch(`https://summer-camp-server-navy-omega.vercel.app/users/instractor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instractor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    return (
        <div>
            <div className="w-full">
                
                <h3 className="text-3xl font-semibold my-4 text-center bg-orange-400 text-white py-10">Total User: {user.length}</h3>
                <div className="overflow-x-auto w-9/12 mx-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead className=' bg-green-500 '>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ? 'admin' :
                                        <button onClick={() => handleAdmin(user)} className="btn btn-ghost bg-orange-400  text-white"><FaUserShield></FaUserShield></button>
                                    }</td>
                                    <td>
                                    {user.role === 'instractor' ? 'Instractor' :
                                        <button onClick={() => handleinstractor(user)} className="btn btn-ghost bg-green-500  text-white">Instractor
                                    </button>}
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Allusers;
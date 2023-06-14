import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/Authprovider';

const Paymenthistory = () => {
    const { user } = useContext(AuthContext)



    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments ', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://summer-camp-server-navy-omega.vercel.app/payments?email=${user?.email}`)
            return response.json()

        },
    })

    return (
        <div>
            <div className="overflow-x-auto w-9/12 mx-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className=' bg-green-500 '>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>TransactionId</th>
                            <th>date</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payments, index) => <tr key={payments._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={payments.photo} />
                                        </div>
                                    </div>
                                </td>
                                <td>{payments.transactionId}</td>

                                <td>{payments.date}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default Paymenthistory;
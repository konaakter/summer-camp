import React, { useContext } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Provider/Authprovider';
import { Link } from 'react-router-dom';
import Uadateclass from './Uadateclass';
import Inastractorclasscard from './Inastractorclasscard';

const Inastractorclass = () => {


    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext)


    const { refetch, data: addclass = [] } = useQuery({
        queryKey: ['addclass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/addclass?email=${user?.email}`)
            return res.data

        },
    })
    return (
        <div className='w-9/12 mx-auto'>
            <div className="mx-auto text-center md:w-4/12 mt-9 ">
                    <div className='  '>
                        <hr />

                        <p className=" mb-2 uppercase">INSTRACTOR</p>
                        <hr />
                    </div>

                    <h1 className="text-3xl uppercase text-green-500  py-4">Add class list</h1>
                </div>
            <div className='  grid grid-cols-2 gap-10 my-20 '>
                {
                    addclass.map((addclass) =>

                       <Inastractorclasscard
                       addclass={addclass}
                       refetch={refetch}
                       ></Inastractorclasscard>


                    )
                }

            </div>
            
        </div>
    );
};

export default Inastractorclass;
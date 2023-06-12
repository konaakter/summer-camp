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
        <div>
            <div className='  grid grid-cols-2 gap-10 my-20'>
                {
                    addclass.map((addclass) =>

                       <Inastractorclasscard
                       addclass={addclass}
                       ></Inastractorclasscard>


                    )
                }

            </div>
            
        </div>
    );
};

export default Inastractorclass;
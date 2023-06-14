import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Toptncstrac = () => {

    const { refetch, data: topinstractor = [] } = useQuery({
        queryKey: ['topinstractor'],
        queryFn: async () => {
            const response = await fetch('https://summer-camp-server-navy-omega.vercel.app/topinstractor')
            return response.json()

        },
    })
    return (
        <div>
            <div>
                <div className="mx-auto text-center md:w-4/12  mt-28 mb-20">
                    <div className='  '>
                        <hr />

                        <p className=" mb-2">INSTRACTOR</p>
                        <hr />
                    </div>

                    <h1 className="text-3xl uppercase text-green-500  py-4">POPULER INSTRAVTOR</h1>
                </div>
            </div>
            <div className=' grid lg:grid-cols-3 gap-28 container mx-auto my-20'>
                {
                    topinstractor.map(topinstractor =>
                        <div className='  relative text-white'>
                            <div className='mx-8 lg:m-0'>
                                <img
                                    src={topinstractor.photo}
                                    alt=''
                                    className=' object-cover w-full  h-56 md:h-64 xl:h-96'
                                />


                            </div>
                            <div className=' absolute -mt-11 z-10 w-10/12 ms-8 transform hover:-translate-y-6 rounded shadow-lg hover:shadow-2xl'>
                                <div className=' bg-orange-400 bg-opacity-80 p-6 text-center '>
                                    <h1 className=' uppercase text-2xl'>{topinstractor.name}</h1>
                                    <h1>{topinstractor.email}</h1>
                                </div>
                            </div>


                        </div>



                    )
                }

            </div>
        </div>
    );
};

export default Toptncstrac;
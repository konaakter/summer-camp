import React from 'react';
import { useQuery } from '@tanstack/react-query';


const Allinstractor = () => {

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
                <div className="mx-auto text-center md:w-4/12  pt-28 ">
                    <div className='  '>
                        <hr />

                        <p className=" mb-2 uppercase">INSTRACTOR</p>
                        <hr />
                    </div>

                    <h1 className="text-3xl uppercase text-green-500  py-4">Our INSTRAVTOR</h1>
                </div>
            </div>
            <div className=' lg:grid lg:grid-cols-3 gap-20 container mx-auto mt-16 mb-36'>
                {
                    topinstractor.map(topinstractor =>
                        <div className='  relative text-white'>
                            <div className=''>
                                <img
                                    src={topinstractor.photo}
                                    alt=''
                                    className=' object-cover w-full h-56 md:h-64 xl:h-96'
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

export default Allinstractor;
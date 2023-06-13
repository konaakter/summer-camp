
import React from 'react';
import {
    useQuery,

} from '@tanstack/react-query'



const Populerclass = () => {


    const { refetch, data: allclass = [] } = useQuery({
        queryKey: ['allclass'],
        queryFn: async () => {
            const response = await fetch('https://summer-camp-server-navy-omega.vercel.app/allclass')
            return response.json()

        },
    })


    return (
        <div>
            <div>
                <div className="mx-auto text-center md:w-4/12  my-8">
                    <div className='  '>
                        <hr />

                        <p className=" mb-2"> Acitivies</p>
                        <hr />
                    </div>

                    <h1 className="text-3xl uppercase text-green-500  py-4">Best Activites</h1>
                </div>
            </div>
            <div className=' lg:grid lg:grid-cols-3 gap-5 my-10 container mx-auto'>
                {
                    allclass.map(allclass =>
                        <div className="card w-96 bg-slate-100 shadow-xl text-slate-50">
                            <figure className="px-10 pt-10">
                                <img src={allclass.photo} alt=" " className="rounded-xl" />
                            </figure>
                            <div className=' bg-orange-400 m-6   transform hover:-translate-y-16 '>
                                <div className="card-body items-center text-center space-y-2   ">
                                    <h2 className="card-title"> Class Name: {allclass.artCraftName}</h2>
                                    <div className=' flex gap-6'>
                                        <p>Price: {allclass.price}</p>
                                        <p>Availes Seats: {allclass.bookSeats}</p>
                                    </div>

                                    <div className="card-actions">
                                        <button class="border border-green-500 text-green-500 font-semibold py-2 px-4 rounded focus:outline-none hover:bg-green-500 hover:text-white">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
};

export default Populerclass;
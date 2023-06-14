import React from 'react';

const Extrasectoin = () => {
    return (
        <div >
            <div>
                <div className="mx-auto text-center md:w-4/12 mt-48">
                    <div className='  '>
                        <hr />

                        <p className=" mb-2 "> welcome to our</p>
                        <hr />
                    </div>

                    <h1 className="text-3xl uppercase text-green-500  py-4"> SUMMER CAMP</h1>
                </div>
                </div>
            <div className=' container mx-auto mb-28'>
                <div className=' grid lg:grid-cols-3 gap-8 pt-12 '>

                    <div className="card w-96 bg-orange-400 text-white shadow-xl">
                        <div className="card-body">
                            <h2 className=' text-4xl'>Mini Camp</h2>
                            <p className=' text-3xl italic'>ages 11-13</p>
                        </div>
                        <figure><img src="https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" /></figure>
                    </div>


                    <div className="card card-compact w-96 bg-base-100 shadow-xl text-white">
                        <figure><img src="https://images.pexels.com/photos/8082900/pexels-photo-8082900.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" /></figure>
                        <div className="card-body bg-green-400">
                            <h2 className="card-title text-4xl">Traditional Camp</h2>
                            <p className=' text-3xl italic'>ages 7-15</p>


                        </div>
                    </div>

                    <div className="card w-96 bg-orange-400 text-white shadow-xl">
                        <div className="card-body">
                            <h2 className=' text-4xl'>Mini Camp</h2>
                            <p className=' text-3xl italic'>ages 11-13</p>
                        </div>
                        <figure><img src="https://images.pexels.com/photos/8033865/pexels-photo-8033865.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" /></figure>
                    </div>




                </div>
            </div>
            </div>
            );
};

            export default Extrasectoin;
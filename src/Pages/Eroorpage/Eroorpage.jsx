import React from 'react';
import { Link } from 'react-router-dom';







const Eroorpage = () => {


    return (
        <div>

            <div>

                <div className=' w-1/2 mx-auto'>
                    <img className=' h-56' src="https://cdn-icons-png.flaticon.com/512/1243/1243910.png?w=740&t=st=1686562073~exp=1686562673~hmac=f5882e7ef6a9240688b674477c585bf16f8f9291010adcf843bd0805db464cd7" alt="" />
                    <div className=' mt-10 ms-20'>
                    <Link to='/' className='rounded-md button-primary  text-white bg-cyan-600 p-5'>
                        Back to Home
                    </Link>
                    </div>
                   

                </div>
            </div>
        </div>
    );
};

export default Eroorpage;
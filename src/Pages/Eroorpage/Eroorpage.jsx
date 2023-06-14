import React from 'react';
import { Link } from 'react-router-dom';



const Eroorpage = () => {


    return (
        <div>

            <div>

                <div className=' w-1/2 mx-auto'>
                    <img className=' ' src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-20650.jpg?w=740&t=st=1686754221~exp=1686754821~hmac=275ea3112826c0efa593fe43789bf4668a1b62652007c6bffc02a7bc2546dfea" alt="" />
                    <div className='   text-center -mt-14'>
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
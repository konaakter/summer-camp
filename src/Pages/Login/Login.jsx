import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/Authprovider';
import { FaEye, FaEyeSlash,  } from 'react-icons/fa';
import Socallogin from '../../Componet/SocalLogin/Socallogin';


const Login = () => {
    const [show, setshow] = useState(false)
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

   

    const { register, handleSubmit,reset , watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        reset();
        signIn(data.email, data.password)
            .then(result => {
                
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });

            })
            .catch(error => console.log(error))
    }
    return (
        <div className='bg   '>
            <div className='    mx-auto pt-28 '>
                <div className=' lg:flex lg:gap-40 justify-center  bg-transparent '>
                    <div data-aos="zoom-in-down" className=' border lg:w-3/12 w-4/5 lg:mx-0 mx-auto  pt-7 pb-7 px-7 my-11  '>
                        <h2 className='text-2xl text-bold mb-4 text-center'>Login</h2>
                        <form className=' mt-8' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">

                                <input {...register("email", { required: true })} className=' py-2 rounded border-none outline-none' placeholder='Email' type="email" name="email" id="" />
                                <label htmlFor="email" className='border-b-2 mb-6'></label>
                                {errors.email && <span>This field is required</span>}

                            </div>
                            <div className="form-control">

                                <input {...register("password", { required: true })} className='  py-2 rounded border-none outline-none' placeholder='Password' type={show ? "text" : "password"} name="password" id="" />

                                <label className=' border-b-2 '></label>
                                <p className=' ms-60 -m-6 text-2xl' onClick={() => setshow(!show)}> <small>
                                  {
                                    show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                  }
                                </small>
                                </p>
                                {errors.password && <span>This field is required</span>}
                            </div>
                            <div className=' mt-10'>
                            <button className="btn btn-wide bg-green-400 border-white mt-6"> <Link>Login</Link></button>
                            </div>
                           

                            <p className=' mt-3'>------------------or------------------</p>
                            <Socallogin></Socallogin>

                        </form>
                        <p className=''> <small>New to this website ? please
                            <Link className='text-cyan-400  underline' to='/sinup'>Register</Link></small></p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
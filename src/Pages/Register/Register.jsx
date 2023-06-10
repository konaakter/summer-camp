import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';


const Register = () => {
    const { createUser, updateUserProfile} = useContext(AuthContext)
    const { register, handleSubmit,  reset,  watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        reset();
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                .then(() => {
                    const saveUser = { name: data.name, email: data.email }
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                               
                            }
                        })
                })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className='container mx-auto'>
                <div className=' lg:flex lg:gap-40 '>
                    <div data-aos="zoom-in-down" className=' border lg:w-3/12 w-4/5 lg:mx-0 mx-auto  pt-7 pb-7  px-7 my-11  '>
                        <h2 className='text-2xl text-bold mb-4 text-center'>Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                               
                                <input {...register("name", { required: true })} className='  py-2 rounded border-none outline-none' placeholder='Name' type="text" name="name" id="" />
                                <label className=' border-b-2 mb-2'></label>
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                
                                <input {...register("photo", { required: true })} className='  py-2 rounded border-none outline-none' placeholder='Photo URL' type="text" name="photo" id="" />
                                <label className=' border-b-2'></label>
                                {errors.photo && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                
                                <input {...register("email", { required: true })} className=' py-2 rounded border-none outline-none' placeholder='Email' type="email" name="email" id="" />
                                <label htmlFor="email" className='border-b-2 mb-4'></label>
                                {errors.email && <span>This field is required</span>}

                            </div>
                            <div className="form-control">
                                
                                <input {...register("password", { 
                                required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                 })} className='  py-2 rounded border-none outline-none' placeholder='Password' type="password" name="password" id="" />
                                <label className=' border-b-2'></label>
                                {errors.password && <span>This field is required</span>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                               
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <button className="btn btn-wide bg-cyan-400 border-white mt-6"> <Link>REgister</Link></button>

                        </form>
                        <p className=''> <small>New to this website ? please
                            <Link className=' text-cyan-400 underline' to='/login'>Registatoin</Link></small></p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>    );
};

export default Register;
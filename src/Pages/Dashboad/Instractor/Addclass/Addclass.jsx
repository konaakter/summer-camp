import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/Authprovider';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


const Addclass = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const img_host = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const { register, handleSubmit, reset } = useForm();


    console.log(img_hosting_token)


    const onSubmit = data => {

        console.log(data)
        /*const {name, image, price, instructorEmail,instructorname, totalSeats} = data;

        const addclass = {artCraftName: name, instructorEmail: instructorEmail, price, photo:image,  instructorName: instructorname, totalSeats: parseInt(totalSeats), bookSeats : 0, status: 'panding' }
        console.log(addclass )*/

        /* axiosSecure.post('/addclass', addclass)
                 .then(data => {
                     console.log('after posting new menu item', data.data)
                     if(data.data.insertedId){
                         reset();
                         Swal.fire({
                             position: 'top-end',
                             icon: 'success',
                             title: 'Class added successfully',
                             showConfirmButton: false,
                             timer: 1500
                           })
                     }
                 })*/


        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_host, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {

                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    console.log(imgURL)
                    const { name, price, instructorEmail, instructorname, totalSeats } = data;
                    const addclass = { artCraftName: name, instructorEmail: instructorEmail, price, instructorName: instructorname, photo: imgURL, totalSeats: parseInt(totalSeats), bookSeats: 0, status: 'panding' }
                    console.log(addclass)

                    axiosSecure.post('/addclass', addclass)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })

                }

            })
    }


    return (
        <div className=' w-1/2 mx-auto pt-5'>
            <div className='border-4 border-pink-300 p-1'>
                <div className=' bg-slate-400   transition-colors duration-200 delay-500 p-10'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class name</span>
                                </label>
                                <label className="">
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder=" Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <div className="form-control w-full ">
                                    <label className="label">

                                    </label>
                                    <input type="file" {...register("image", { required: true })} name='image' className="file-input file-input-bordered w-full max-w-xs" />
                                    <label className="label">

                                    </label>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor name </span>
                                </label>
                                <label className="">
                                    <input {...register("instructorname", { required: true })} defaultValue={user?.displayName} type="text" name="instructorname" placeholder="Instructor name "
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <label className="">
                                    <input {...register("instructorEmail", { required: true })} defaultValue={user?.email} type="text" name="instructorEmail" placeholder="Instructor Email"
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className=' flex  gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <label >
                                        <input {...register("price", { required: true })} type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Available seats</span>
                                    </label>
                                    <label className="">
                                        <input {...register("totalSeats", { required: true })} type="text" name="totalSeats" placeholder="Available seats" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button
                            className=' w-full bg-pink-300 px-5 py-2 border-2
                         mt-8 text-white  rounded'>
                            Add button</button>
                    </form>
                </div>
            </div>

        </div >
    );
};

export default Addclass;
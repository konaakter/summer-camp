import React from 'react';
import { AuthContext } from '../../../../Provider/Authprovider';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, Transition } from '@headlessui/react'


import { Fragment } from 'react'
import Swal from 'sweetalert2';


const Uadateclass = ({ uapdateInfo, isOpen, closeModal, refetch }) => {


    const onSubmit = data => {

        console.log(data)
        const{artCraftName, price, instructorEmail,instructorname, totalSeats} = data;

        const addclass = {artCraftName: artCraftName, price: parseFloat(price) ,  totalSeats: parseFloat(totalSeats) }
        console.log(addclass )

        fetch(`https://summer-camp-server-navy-omega.vercel.app/addclas/${uapdateInfo._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addclass)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch()
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${uapdateInfo.artCraftName} class hass been change!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
       
    }
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext)
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Review Info Before Reserve
                                </Dialog.Title>



                                <div className='border-2 border-orange-400 p-1'>
                                    <div className='    transition-colors duration-200 delay-500 p-10'>
                                        <form onSubmit={handleSubmit(onSubmit)} >
                                            <div className=' '>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Class name</span>
                                                    </label>
                                                    <label className="">
                                                        <input defaultValue={uapdateInfo.artCraftName} type="text" {...register("artCraftName", { required: true })} name="artCraftName" placeholder=" Name" className="input input-bordered w-full" />
                                                    </label>
                                                </div>
                                                
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Instructor name </span>
                                                    </label>
                                                    <label className="">
                                                        <input  {...register("instructorname", { required: true })} defaultValue={user?.displayName} readOnly type="text" name="instructorname" placeholder="Instructor name "
                                                            className="input input-bordered w-full" />
                                                    </label>
                                                </div>
                                                <div className="form-control ">
                                                    <label className="label">
                                                        <span className="label-text">Instructor Email</span>
                                                    </label>
                                                    <label className="">
                                                        <input {...register("instructorEmail", { required: true })} defaultValue={user?.email} readOnly type="text" name="instructorEmail" placeholder="Instructor Email"
                                                            className="input input-bordered w-full" />
                                                    </label>
                                                </div>
                                                <div className=' flex  gap-4'>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Price</span>
                                                        </label>
                                                        <label >
                                                            <input defaultValue={uapdateInfo.price} {...register("price", { required: true })} type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                                                        </label>
                                                    </div>
                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text">Available seats</span>
                                                        </label>
                                                        <label className="">
                                                            <input defaultValue={uapdateInfo.totalSeats} {...register("totalSeats", { required: true })} type="text" name="totalSeats" placeholder="Available seats" className="input input-bordered w-full" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className=' w-full bg-green-400 rounded-s-3xl px-5 py-2 border-2
                                                mt-8 text-white  '>
                                                Add button</button>
                                        </form>
                                    </div>
                                </div>

                                <hr className='mt-8 ' />

                                <div className='flex mt-2 justify-around'>
                                    <button
                                        type='submit'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                        onClick={closeModal}
                                    >
                                        Cancel
                                    </button>
                                    



                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Uadateclass;

/*
<div className="form-control ">
                                                    <label className="label">
                                                        <span className="label-text">Photo</span>
                                                    </label>
                                                    <div className="form-control w-full ">
                                                        <label className="label">

                                                        </label>
                                                        <input type="file" {...register("photo", { required: true })} name='photo' className="file-input file-input-bordered w-full max-w-xs" />
                                                        <label className="label">

                                                        </label>
                                                    </div>
                                                </div>*/
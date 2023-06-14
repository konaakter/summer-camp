import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { loadStripe } from '@stripe/stripe-js';


import { Fragment } from 'react'
import ChechOut from '../Pages/Dashboad/Payment/ChechOut';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);


const Modal = ({ closeModal, isOpen, bookingInfo }) => {

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
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                         <img src={bookingInfo.photo} alt="" srcset="" />
                                    </p>
                                    </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        class Name: {bookingInfo.artCraftName}
                                    </p>
                                </div>



                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Price: $ {bookingInfo.price}
                                    </p>
                                </div>
                                <Elements stripe={ stripePromise}>
                                    <ChechOut  bookingInfo={bookingInfo}
                                    closeModal={closeModal}
                                     ></ChechOut>
                                </Elements>
                                <hr className='mt-8 ' />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )

};

export default Modal;
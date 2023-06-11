import React, { useState } from 'react';
import Modal from '../../../Componet/Modal';

const Studentcartcad = ({ sletedclass, index, handleremove }) => {

    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
      setIsOpen(false)
    }

    const [bookingInfo, setBookingInfo] = useState({
        artCraftName : sletedclass.artCraftName,
        _id : sletedclass._id,
        
        price :  sletedclass.price
      })
    return (
        <tr>
            <th>
                <label>
                    {
                        index + 1
                    }

                </label>
            </th>
            <td>

                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">
                            {
                                sletedclass.artCraftName
                            }
                        </div>

                    </div>
                </div>

            </td>
            <td>
                {
                    sletedclass.price
                }
            </td>
            <td>
                {
                    sletedclass.totalSeats
                }
            </td>
            <th>
                <button onClick={() => handleremove(sletedclass)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <th>
                <button onClick={() => setIsOpen(true)} className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    Pay
                </button>
            </th>
            <Modal
                
                bookingInfo={bookingInfo}
                isOpen={isOpen}
                closeModal={closeModal}
            ></Modal>


        </tr>


    );
};

export default Studentcartcad;
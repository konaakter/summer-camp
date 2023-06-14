import React, { useState } from 'react';
import Uadateclass from './Uadateclass';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Inastractorclasscard = ({ addclass, refetch }) => {

    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }



    const [uapdateInfo, setuapdateInfo] = useState({
        artCraftName: addclass.artCraftName,
        _id: addclass._id,
        price: addclass.price,
        totalSeats: addclass.totalSeats
    })


    const sowFeedback = feedback => {
        Swal.fire({
            title: 'Feedback',
            text: feedback,
        })
    }


    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={addclass.photo} /></figure>
                    <div className="card-body bg-orange-400 text-white">
                        <h2 className="card-title">
                            {
                                addclass.artCraftName
                            }

                        </h2>
                        <div className=' flex gap-6'>
                            <p>Price: {addclass.price}</p>
                            <p>Availes Seats: {addclass.totalSeats}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <div >
                                {addclass.status === 'approved' ? <button className="bg-green-400 px-4 hover:bg-transparent border-green-400 rounded-3xl">Approve</button> : addclass.status === 'Deny' ? 'Deny' : <button className="badge badge-outline">Panding</button>

                                }
                            </div>
                            <div >


                                <button onClick={() => setIsOpen(true)} className="bg-green-400 px-4 hover:bg-transparent border-green-400 rounded-3xl"> Update</button>

                            </div>

                            <div >

                                {addclass.status === 'Deny' &&
                                    <button className="bg-green-400 px-4 hover:bg-transparent border-green-400 rounded-3xl" onClick={() => sowFeedback(addclass.feedback)}>Feedback</button>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <Uadateclass
                    uapdateInfo={uapdateInfo}
                    isOpen={isOpen}
                    closeModal={closeModal}
                    refetch={refetch}
                ></Uadateclass>
            </div>

        </div>
    );
};

export default Inastractorclasscard;
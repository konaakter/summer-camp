import React, { useState } from 'react';
import Uadateclass from './Uadateclass';

const Inastractorclasscard = ({ addclass }) => {

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


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=600" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {
                            addclass.artCraftName
                        }
                       
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div >
                            {addclass.status === 'approved' ? <button className="badge badge-outline">Approve</button> : addclass.status === 'Deny' ? 'Deny' : <button className="badge badge-outline">Panding</button>

                            }
                        </div>
                        <div >


                            <button onClick={() => setIsOpen(true)} className="badge badge-outline"> Update</button>

                        </div>

                        <div >

                            {addclass.status === 'Deny' &&
                                <button className="badge badge-outline">Feedback</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
            <Uadateclass
                uapdateInfo={uapdateInfo}
                isOpen={isOpen}
                closeModal={closeModal}
            ></Uadateclass>
        </div>
    );
};

export default Inastractorclasscard;
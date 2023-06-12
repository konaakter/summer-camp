import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';

const Socallogin = () => {
    const { Googlelogin } = useContext(AuthContext)


    const handlergoogle = () => {
        Googlelogin()
            .then(result => {
                const gogle = result.user
                console.log(gogle);
                const saveUser = { name:  gogle.displayName, email:  gogle.email }
                fetch('https://summer-camp-server-navy-omega.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className=' text-center '>
            <button onClick={handlergoogle} className="btn btn-wide bg-cyan-400 border-white mt-6">
                <FaGoogle className=' text-2xl'></FaGoogle>Gogoole</button>

        </div>
    );
};

export default Socallogin;
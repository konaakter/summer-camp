import React, { useState } from 'react';
import './Navber.css';
import img1 from '../../../img/8053802.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/Authprovider';



const Navber = () => {
    const {user, logOut} = useContext(AuthContext)

    const handlelogout = () => {
        logOut()
            .then()

            .catch(error => {
                console.log(error)
            })

    }
    const [activeIndex, setActiveIndex] = useState(0);

    const handleMenuItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='navigation-menu container mx-auto ' >
            <div className=''>
                <div className=' w-24 mx-auto m-0 '>
                    <img className=' h-14 w-full' src={img1} alt="" srcset="" />

                </div>
                <h1 className=' font-extrabold text-amber-950 text-3xl'>Camp Victory.
                </h1>
            </div>
            <div className=' mt-5' >
                <ul>
                    <Link to='/'> <li className={activeIndex === 0 ? 'active' : ''} onClick={() => handleMenuItemClick(0)}>
                        Home</li> </Link>
                    <Link to='/dashboad'> <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleMenuItemClick(1)}>
                        login</li></Link>
                    <Link to="/sinup"><li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleMenuItemClick(2)}>
                        Services</li></Link>
                  <Link to='/approveclass'> <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleMenuItemClick(3)}>
                        ALLclass</li></Link> 
                </ul>
            </div>


            <div className='mt-5'>
                <p>
                    {
                        user && <span>{user?.display}</span>
                    }
                </p>
                <p>
                    {
                        user ?
                            <span className='flex gap-2 justify-center content-center'>
                                {
                                    user.photoURL &&
                                    <img className='w-12 rounded-full' title={user.displayName ? user.displayName : ''} src={user.photoURL} />
                                }
                                <Link onClick={handlelogout} className="btn">LogOut</Link> </span>
                            : <Link to={'/login'} className="btn">Login</Link>
                    }
                </p>

            </div>
        </div>
    );


};

export default Navber;
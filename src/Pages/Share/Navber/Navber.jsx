import React, { useEffect, useState } from 'react';
import './Navber.css';
import img1 from '../../../img/8053802.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/Authprovider';



const Navber = () => {
    const { user, logOut } = useContext(AuthContext)

   
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

   
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
      
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);





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

        <div className=' '>
            <div className=" navbar flex bg-base-100 absolute z-10 bg-transparent text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-orange-400 bg-opacity-50 rounded-box w-52">
                            <Link to='/'> <li className={activeIndex === 0 ? 'active' : ''} onClick={() => handleMenuItemClick(0)}>
                                Home</li> </Link>
                            {
                                user && <Link to='/dashboad'> <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleMenuItemClick(1)}>
                                    Dashbord</li></Link>

                            }

                            <Link to='/approveclass'>
                                <li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleMenuItemClick(2)}>
                                    ALLclass</li></Link>
                            <Link to='/ser'>
                                <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleMenuItemClick(3)}>
                                    ALL Inastractor</li></Link>


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
                                            <Link onClick={handlelogout} className=" bg-green-400 px-2 rounded-3xl">LogOut</Link> </span>
                                        : <Link to={'/login'} className=" bg-green-400 p-2 rounded-2xl">Login</Link>
                                }
                            </p>

                        </ul>

                    </div>
                    <div>
                        <div className=' lg:flex-col flex flex-row lg:ms-0  ms-16'>
                            <div className=' w-24 mx-auto  '>
                                <img className=' h-14 w-full' src={img1} alt="" srcset="" />

                            </div>
                            <h1 className=' font-extrabold text-green-50 lg:text-3xl text-2xl'>Camp Victory.
                            </h1>
                        </div>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex   bg-green-500 border rounded-2xl  ">
                    <ul className=" menu  menu-horizontal pt-0 fixed   bg-green-500 border  border-green-500 
                    rounded-3xl">

                        <Link to='/'> <li className={activeIndex === 0 ? 'active' : ''} onClick={() => handleMenuItemClick(0)}>
                            Home</li> </Link>
                        {
                            user && <Link to='/dashboad'> <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleMenuItemClick(1)}>
                                Dashbord</li></Link>

                        }

                        <Link to='/approveclass'>
                            <li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleMenuItemClick(2)}>
                                ALLclass</li></Link>
                        <Link to='/ser'>
                            <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleMenuItemClick(3)}>
                                ALL Inastractor</li></Link>


                    </ul>
                </div>

                <div className=" navbar-end ">
                   
                    <label className="swap mt-0 swap-rotate w-16 h-16">
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                           
                            checked={theme === "light" ? false : true}
                            className="toggle toggle-sm"
                        />

                    </label>
                </div>


                <div className="navbar-end hidden lg:flex ">


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
                                    <Link onClick={handlelogout} className=" bg-green-500 px-7 py-3">LogOut</Link> </span>
                                : <Link to={'/login'} className=" bg-green-500 px-7 py-3">Login</Link>
                        }
                    </p>

                </div>

            </div>
        </div>

    );


};

export default Navber;


/*

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
        </div>*/
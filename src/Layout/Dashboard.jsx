import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers,  FaBox, FaUser } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';
import useInstractor from '../hooks/useInstractor';


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstractor] = useInstractor();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-20 ">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-green-500 text-zinc-50">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboad/allclass"><FaBook></FaBook>Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboad/allusers"><FaUsers></FaUsers> Manage Users</NavLink></li>

                        </> : isInstractor ?

                            <>
                                <li><NavLink to="/"><FaHome></FaHome> Instractor Home </NavLink></li>
                               
                                <li><NavLink to="/dashboad/myaddclass"> My added Class</NavLink></li>
                                <li>
                                    <NavLink to="/dashboad/Addclass"> Add Class
                                        <span className="badge inl badge-secondary"></span>
                                    </NavLink>

                                </li>
                            </> :
                            <>
                                <li><NavLink to="/dashboad/home"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/dashboad/history"><FaCalendarAlt></FaCalendarAlt> Payment History</NavLink></li>
                                <li><NavLink to="Bokingclass"><FaWallet></FaWallet> Booking Class</NavLink></li>
                                <li>
                                    <NavLink to="/dashboad/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                        <span className="badge inl badge-secondary"></span>
                                    </NavLink>

                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/approveclass"><FaBox></FaBox> All Class</NavLink></li>
                    <li><NavLink to="/ser"> <FaUser></FaUser> All Instractor</NavLink></li>
                </ul>

            </div>

        </div>
    );

}

export default Dashboard;
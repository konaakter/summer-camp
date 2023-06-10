import React from 'react';
import Fotter from '../Pages/Share/Fotter/Fotter';
import Navber from '../Pages/Share/Navber/Navber';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;
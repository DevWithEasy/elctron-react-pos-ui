import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

const Layout = () => {
    const isAuth = true
    return (
        <div className='relative h-screen w-full flex justify-between bg-[#f2f6fd]'>
            {
                !isAuth ?
                <Login/> :
                <>
                    <Sidebar/>
                    <div className=' h-screen w-10/12 p-4 pt-14'>
                        <div className='bg-white h-full rounded-lg overflow-y-auto'>
                            <Header/>
                            <Outlet/>
                        </div>
                    </div>
                </> 
            }
        </div>
    );
};

export default Layout;
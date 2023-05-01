import React from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'
import {RxDashboard} from 'react-icons/rx'
import {RiProductHuntLine,RiLoginCircleLine} from 'react-icons/ri'
import {TbFileInvoice} from 'react-icons/tb'
import {MdOutlinePeopleAlt} from 'react-icons/md'

const Sidebar = () => {
    const data=[
        {
            path : '/',
            title : 'Home',
            icon : <AiOutlineHome size={16}/>
        },
        {
            path : '/dashboard',
            title : 'Dashboard',
            icon : <RxDashboard size={16}/>
        },
        {
            path : '/products',
            title : 'Products',
            icon : <RiProductHuntLine size={16}/>
        },
        {
            path : '/invoices',
            title : 'Invoices',
            icon : <TbFileInvoice size={16}/>
        },
        {
            path : '/customers',
            title : 'Customers',
            icon : <MdOutlinePeopleAlt size={16}/>
        }
    ]
    return (
        <div className='h-screen sm:w-2/12 pl-4'>
            <div className='flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 mx-auto my-3 bg-blue-500 text-white rounded-full'>
                <span className='text-2xl sm:text-4xl'>POS</span>
            </div>
            <div className='w-full flex flex-col items-center justify-center space-y-2'>
                {
                    data.map((d,i)=><NavLink 
                        key={i} 
                        to={d?.path}
                        className='p-2 w-10 sm:w-full flex justify-center items-center sm:justify-start space-x-2 bg-white rounded-md overflow-hidden'
                        >
                            <span className='shrink-0'>{d?.icon}</span>
                            <span className='hidden sm:block'>{d?.title}</span>
                        </NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default Sidebar;
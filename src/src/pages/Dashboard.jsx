import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineBarChart, AiOutlineLineChart, AiOutlineUserSwitch } from 'react-icons/ai';
import { GiMedicines } from 'react-icons/gi';
import { MdOutlineSell } from 'react-icons/md';
import { RxAvatar, RxHeart, RxHome } from 'react-icons/rx';
import { TbMoneybag } from 'react-icons/tb';
import api_url from '../utils/api_url';
import get_fixed_num from '../utils/get_fixed_num';

const Dashboard = () => {
    const [data,setData] = useState({})
    const getDashboardData =async()=>{
        try {
            const res = await axios.get(`${api_url}/auth/dashboard`,{
                headers: {
                    authorization : localStorage.getItem('token')
                }
            })
            setData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const {users,companies,generics,product,invest,customer} = data

    const benifits = (product?.total_stock_price + customer?.total_sale_price) - invest

    useEffect(() =>{
        getDashboardData()
    },[])

    console.log(data)
    return (
        <div className='mx-4'>
            <h1 className='text-center text-3xl font-bold p-2 uppercase'>Dashborad</h1>
            <div className='w-full grid grid-cols-2 md:grid-cols-4 text-white gap-3'>
                <div className='bg-green-400 flex items-center rounded-md p-2 space-x-4'>
                    <RxAvatar size={40} className='shrink-0'/>
                    <div>
                        <p>Total Users : </p>
                        <p className='text-2xl font-bold text-center'>{users}</p>
                    </div>
                </div>
                <div className='bg-cyan-400 flex items-center rounded-md p-2 space-x-4'>
                    <RxHome size={40} className='shrink-0'/>
                    <div>
                        <p>Total Company : </p>
                        <p className='text-2xl font-bold text-center'>{companies}</p>
                    </div>
                </div>
                <div className='bg-yellow-400 flex items-center rounded-md p-2 space-x-4'>
                    <RxHeart size={40} className='shrink-0'/>
                    <div>
                        <p>Total Generics : </p>
                        <p className='text-2xl font-bold text-center'>{generics}</p>
                    </div>
                </div>
                <div className='bg-teal-400 flex items-center rounded-md p-2 space-x-4'>
                    <GiMedicines size={40} className='shrink-0'/>
                    <div>
                        <p>Total Products : </p>
                        <p className='text-2xl font-bold text-center'>{product?.total_products}</p>
                    </div>
                </div>
                <div className='bg-sky-400 flex items-center rounded-md p-2 space-x-4'>
                    <TbMoneybag size={40} className='shrink-0'/>
                    <div>
                        <p>Total Investment : </p>
                        <p className='text-2xl font-bold text-center'>{invest}</p>
                    </div>
                </div>
                <div className='bg-blue-400 flex items-center rounded-md p-2 space-x-4'>
                    <AiOutlineLineChart size={40} className='shrink-0'/>
                    <div>
                        <p>Total Stock : </p>
                        <p className='text-2xl font-bold text-center'>
                            {product && get_fixed_num(product?.total_stock_price)}
                        </p>
                    </div>
                </div>
                <div className='bg-red-400 flex items-center rounded-md p-2 space-x-4'>
                    <MdOutlineSell size={40} className='shrink-0'/>
                    <div>
                        <p>Total Sales : </p>
                        <p className='text-2xl font-bold text-center'>
                            {customer && get_fixed_num(customer?.total_sale_price)}
                        </p>
                    </div>
                </div>
                <div className='bg-green-400 flex items-center rounded-md p-2 space-x-4'>
                    <AiOutlineBarChart size={40} className='shrink-0'/>
                    <div>
                        <p>Total Benifits : </p>
                        <p className='text-2xl font-bold text-center'>
                            {benifits && get_fixed_num(benifits)}
                        </p>
                    </div>
                </div>
                <div className='bg-teal-400 flex items-center rounded-md p-2 space-x-4'>
                    <AiOutlineUserSwitch size={40} className='shrink-0'/>
                    <div>
                        <p>Total Customers : </p>
                        <p className='text-2xl font-bold text-center'>{customer?.total_customers}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
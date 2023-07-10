import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import OrderItem from '../components/OrderItem';
import useProductStore from '../store/productStore';
import handleChange from '../utils/handleChange';
import axios from 'axios';
import api_url from '../utils/api_url';
import { useToast } from '@chakra-ui/react';
import {useNavigate } from 'react-router-dom'
import cart_img from '../assets/empty-cart.png'
import get_fixed_num from '../utils/get_fixed_num';

const Order = () => {
    const {cart,resetCart} = useProductStore()
    const toast = useToast()
    const navigate = useNavigate()
    const [value,setValue] = useState({
        name : '',
        phone : '',
        discount : 0,
    })
    
    const total = get_fixed_num(cart.reduce((total, cartItem) => total + cartItem.price * cartItem.qty,0))
    const  discount = get_fixed_num((total*Number(value.discount))/100)
    const paid = get_fixed_num(total-discount)
    const order = {
        ...value,
        total,
        discount,
        paid,
        cart
    }

    const findCustomer = async() =>{
        try {
            const res = await axios.get(`${api_url}/customer/${value.phone}`,{
                headers :{
                    authorization : localStorage.getItem('token')
                }
            })
            if(!res.data.data){
                toast({
                    title: 'Not found customer',
                    status: 'error',
                    isClosable: true,
                })

            }else{
                toast({
                    title: 'Customer successfully find.',
                    status: 'success',
                    isClosable: true,
                })
                setValue({
                    ...value,
                    name : res.data.data.name,
                    phone : res.data.data.phone,
                    discount : res.data.data.status === 'Silver' ? 2.5 : res.data.data.status === 'Gold' ? 5 : res.data.data.status === 'Diamond' ? 10 : 0
                })
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const createInvoice = async() => {
        try {
            const res = await axios.post(`${api_url}/invoice/create`,order,{
                headers: {
                    authorization : localStorage.getItem('token')
                }
            })
            if(res.data.status === 200){

                resetCart()
                navigate('/')

                toast({
                    title: 'Invoice created successfully',
                    status: 'success',
                    isClosable: true,
                })
            }
        } catch (error) {
            console.log(error)
            toast({
                title: 'Invoice created failed.',
                status: 'error',
                isClosable: true,
            })
        }
    }
    
    return (
        <div className='pb-5'>
            <h1 className='p-2 text-2xl text-center font-bold uppercase'>Confirm Order</h1>
            {
                cart.length === 0 ?
                <div className='w-full h-96 flex flex-col justify-center items-center space-y-5'>
                    <img
                        src={cart_img} 
                        alt="empty-cart"
                        className='h-24'
                    />
                    <h1 
                        className='text-red-500 italic text-xl'
                    >
                        Please add some product to cart
                    </h1>
                </div> : 
                <div className="relative overflow-x-auto px-4 space-y-3">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Total Price
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    X
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(product=><OrderItem key={product._id} {...{product}}/>)
                            }
                            <tr className="bg-white ">
                                <td scope="row" colSpan='3' className="px-2 py-2 font-medium whitespace-nowrap">
                                    Total
                                </td>
                                <td className="px-6 py-2 text-center">
                                    {paid}
                                </td>
                            </tr>
                            <tr className="bg-white ">
                                <td scope="row" colSpan='2' className="px-2 py-4 font-medium whitespace-nowrap">
                                    Discount %
                                </td>
                                <td className="px-6 py-2 text-center">
                                    <input type='number' name='discount' value={value.discount} min={0} onChange={(e)=>handleChange(e,value,setValue)} className='w-3/12 border outline-none rounded-lg text-center p-1'/>
                                </td>        
                                <td className="px-6 py-2 text-center">
                                    {discount}      
                                </td>
                            </tr>
                            <tr className="bg-white ">
                                <th scope="row" colSpan='3' className="px-2 py-2 font-medium whitespace-nowrap">
                                    Total bill with discount ({value.percent}%)
                                </th>
                                <td className="px-6 py-2 text-center">
                                    {paid}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex space-x-2 px-2'>
                        <div className='w-1/2 flex flex-col space-y-2'>
                            <input 
                                type='text' 
                                name='phone'
                                value={value.phone} 
                                onChange={(e)=>handleChange(e,value,setValue)}
                                placeholder='Enter customer phone number' 
                                className='w-full p-2 rounded-md border border-gray-300 focus:outline-blue-500'
                            />
                            <input 
                                type='text' 
                                name='name'
                                value={value.name} 
                                onChange={(e)=>handleChange(e,value,setValue)}
                                placeholder='Enter customer name' 
                                className='w-full p-2 rounded-md border border-gray-300 focus:outline-blue-500'
                            />
                            <button 
                                onClick={()=>createInvoice()}
                                className='w-full px-4 py-2 bg-blue-500 text-white rounded-md'
                            >
                                Submit order
                            </button>
                        </div>
                        <div className='w-1/2 flex flex-col space-y-2'>
                            <input 
                                type='text' 
                                name='phone'
                                value={value.phone} 
                                onChange={(e)=>handleChange(e,value,setValue)}
                                placeholder='Enter customer phone number' 
                                className='w-full p-2 rounded-md border border-gray-300 focus:outline-blue-500'
                            />
                            <button
                                onClick={()=>findCustomer()}
                                className='flex justify-center items-center space-x-1 px-4 p-2 bg-blue-500 text-white rounded-md'
                            >
                                <BiSearch size={20}/>
                                <span>Check customer</span>
                            </button>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Order;
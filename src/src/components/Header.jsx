import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../store/productStore';

const Header = () => {
    const navigate = useNavigate()
    const {cart} = useProductStore()
    return (
        <div className='absolute top-0 left-0 w-full flex justify-between items-center px-4 py-2'>
            <div className='w-8/12'>
                {/* <input className='w-full p-2'/> */}
            </div>
            <div className='w-4/12 flex justify-end pr-4'>
                <div className='relative w-10 h-10 flex justify-center items-center'>
                    <AiOutlineShoppingCart onClick={()=>navigate('/order')} size={30} className='cursor-pointer'/>
                    { cart.length >0 && <div className='absolute -top-1 -right-2 flex justify-center items-center bg-red-500 text-white w-5 rounded-full h-5 text-sm'>
                        <span>{cart.length}</span>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Header;
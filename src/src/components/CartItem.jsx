import React, { useEffect, useState } from 'react';
import useProductStore from '../store/productStore';
import {RxCrossCircled} from 'react-icons/rx'
import {IoIosAddCircle} from 'react-icons/io'
import {MdOutlineRemoveCircle} from 'react-icons/md'

const CartItem = ({product}) => {
    const {removeCart,adjustQuantity} = useProductStore()
    const [qty,setQty] = useState(1)
    function handleQtyChange(e) {
        setQty(e.target.value)
        adjustQuantity(product.id , e.target.value)
    }

    // function handleAddQty() {
    //     setQty(newQty)
    //     adjustQuantity(product.id , qty)
    // }

    // function handleRemoveQty() {
    //     console.log(qty);
    //     setQty(qty-1)
    //     console.log(qty);
    //     adjustQuantity(product.id , qty)
    // }


    const value = product?.price * product.qty
    useEffect (()=>{
        setQty(product.qty)
    })
    return (
        <div className='flex justify-between items-center p-2 space-x-2'>
            <p className='w-8/12 flex items-center space-x-3'>
                <RxCrossCircled onClick={()=>removeCart(product.id)} size={20} className='text-red-500 shrink-0'/>
                <img src={product?.thumbnail} alt="" className='w-8 h-8 rounded-md'/>
                <span>{product?.title}</span>
            </p>
            <input type='number' value={qty} min='1' onChange={(e)=>handleQtyChange( e)} className='w-2/12 border outline-none rounded-lg text-center p-0.5 pl-4'/>
            {/* <div className=' flex items-center space-x-2'>
                <MdOutlineRemoveCircle onClick={()=>handleRemoveQty()} size={18} className='text-red-500 cursor-pointer'/>
                <span>{qty}</span>
                <IoIosAddCircle onClick={()=>handleAddQty()} size={18} className='text-green-500 cursor-pointer'/>
            </div> */}
            <p className='w-2/12 text-center'>{value} /-</p>
        </div>
    );
};

export default CartItem;
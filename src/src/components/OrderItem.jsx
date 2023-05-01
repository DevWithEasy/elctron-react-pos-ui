import React, { useEffect, useState } from 'react';
import useProductStore from '../store/productStore';
import {RxCrossCircled} from 'react-icons/rx'

const OrderItem = ({product}) => {
    const {removeCart,adjustQuantity} = useProductStore()
    const [qty,setQty] = useState(1)
    function handleQtyChange(e) {
        setQty(e.target.value)
        adjustQuantity(product.id , e.target.value)
    }


    const value = product?.price * product.qty
    useEffect (()=>{
        setQty(product.qty)
    })
    return (
        <tr className="bg-white border-b ">
            <th scope="row" className="px-2 py-2 font-medium whitespace-nowrap">
                {product.title}
            </th>
            <td className="px-6 py-2 text-center">
                {product.price}
            </td>
            <td className="px-6 py-2 text-center">
                <input type='number' value={qty} min='1' onChange={(e)=>handleQtyChange( e)} className='w-3/12 border outline-none rounded-lg text-center p-0.5 pl-4'/>
            </td>
            <td className="px-6 py-2 text-center">
                {product.price * product.qty}
            </td>
            <td className="px-6 py-2 flex justify-center items-center">
                <RxCrossCircled onClick={()=>removeCart(product.id)} size={25} className='text-red-500 shrink-0 cursor-pointer'/>
            </td>
        </tr>
    );
};

export default OrderItem;
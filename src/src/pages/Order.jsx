import React, { useState } from 'react';
import OrderItem from '../components/OrderItem';
import useProductStore from '../store/productStore';

const Order = () => {
    const {cart} = useProductStore()
    const [percent,setPercent] = useState(0)
    const [name,setName] = useState('')
    const [mobile,setMobile] = useState('')
    const total = cart.reduce((total, cartItem) => total + cartItem.price * cartItem.qty,0)
    const  discount = (total*percent)/100
    const finalPrice = total-discount
    const order = {
        name,
        mobile,
        cart
    }
    console.log(order);
    return (
        <div>
            <h1 className='p-2 text-2xl text-center font-bold uppercase'>Confirm Order</h1>
            {
                cart.length === 0 ?
                <div className='w-full h-96 flex justify-center items-center'>
                    <h1 className='text-red-500 italic text-xl'>Please add some product to cart</h1>
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
                                cart.map(product=><OrderItem key={product.id} {...{product}}/>)
                            }
                            <tr className="bg-white ">
                                <td scope="row" colSpan='3' className="px-2 py-2 font-medium whitespace-nowrap">
                                    Total
                                </td>
                                <td className="px-6 py-2 text-center">
                                    {total}
                                </td>
                            </tr>
                            <tr className="bg-white ">
                                <td scope="row" colSpan='2' className="px-2 py-4 font-medium whitespace-nowrap">
                                    Discount %
                                </td>
                                <td className="px-6 py-2 text-center">
                                    <input type='number' value={percent} min={0} onChange={(e)=>setPercent(e.target.value)} className='w-3/12 border-b outline-none rounded-lg text-center p-0.5 pl-4'/> %      
                                </td>        
                                <td className="px-6 py-2 text-center">
                                    {discount}      
                                </td>
                            </tr>
                            <tr className="bg-white ">
                                <th scope="row" colSpan='3' className="px-2 py-2 font-medium whitespace-nowrap">
                                    Total bill with discount ({percent}%)
                                </th>
                                <td className="px-6 py-2 text-center">
                                    {finalPrice}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex gap-x-3'>
                        <div className='w-1/2 space-y-2'>
                            <label htmlFor="">Customer name :</label>
                            <input type='text' name='name' onChange={(e)=>setName(e.target.value)} className='w-full p-2 rounded-md border border-gray-300'/>
                        </div>
                        <div className='w-1/2 space-y-2'>
                            <label htmlFor="">Customer mobile No :</label>
                            <input type='text' name='name' onChange={(e)=>setMobile(e.target.value)} className='w-full p-2 rounded-md border border-gray-300'/>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={()=>{}} className='px-4 py-2 bg-blue-500 text-white rounded-md'>Submit order</button>
                    </div>
                </div>
            }

        </div>
    );
};

export default Order;
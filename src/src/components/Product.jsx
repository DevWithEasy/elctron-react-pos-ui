import React from 'react';
import useProductStore from '../store/productStore';

const Product = ({product}) => {
    const {addCart} = useProductStore()
    const {thumbnail,title,price,stock} = product

    return (
        <div className='w-full flex flex-col space-y-2 p-2 shadow-md border rounded-md'>
            <img src={thumbnail} alt="" className='h-40 mx-auto rounded-md mb-4'/>
            <p className=' flex-1'>{title}</p>
            <div className=''>
                <div className='space-y-3'>
                    <p className='flex justify-between'>
                        <span>Price : {price} </span>
                        <span>Stock : {stock}</span>
                    </p>
                    <button onClick={()=>addCart(product)} className='w-full p-2 bg-blue-300 text-white rounded-md'>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
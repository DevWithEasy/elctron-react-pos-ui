import React from 'react';
import useProductStore from '../store/productStore';
import { useToast } from '@chakra-ui/react';
import toast_alert from '../utils/toast_alert';

const Product = ({product}) => {
    const {addCart} = useProductStore()
    const toast = useToast()
    const {name,price,quantity} = product

    const addToCart = (product) =>{
        if(product.quantity <= 0){
            return toast_alert(
                toast,
                'Product no available stock.',
                'error'
            )
        }else{
            addCart(product)
            return toast_alert(
                toast,
                'Product added to cart',
            )
        }
    }

    return (
        <div
            onClick={()=>addToCart(product)}
            className={`w-full p-2 border rounded-md cursor-pointer ${quantity === 0 ? 'border-red-200' : 'border-blue-100'}`}
        >
            <p className=''>{name}</p>
            <p className='flex justify-between space-x-2 text-xs'>
                <span>Price : {price} ৳</span>
                <span>Stock : {quantity}</span>
            </p>
        </div>
    );
};

export default Product;
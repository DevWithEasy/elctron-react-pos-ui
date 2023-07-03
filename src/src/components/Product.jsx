import React from 'react';
import useProductStore from '../store/productStore';
import { useToast } from '@chakra-ui/react';

const Product = ({product}) => {
    const {addCart} = useProductStore()
    const toast = useToast()
    const {name,price,quantity} = product

    const addToCart = (product) =>{
        if(product.quantity <= 0){
            return toast({
                title: 'Product no available stock.',
                status: 'error',
                isClosable: true,
            })
        }else{
            addCart(product)
            toast({
                title: 'Product added to cart',
                status: 'success',
                isClosable: true,
            })
        }
    }

    return (
        <div
            onClick={()=>addToCart(product)}
            className='w-full p-2 border rounded-md cursor-pointer'
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
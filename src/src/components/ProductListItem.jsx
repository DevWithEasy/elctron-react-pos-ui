import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import UpdateProduct from './Admin/products/UpdateProduct';
import DeleteProduct from './Admin/products/DeleteProduct';

const ProductListItem = ({product}) => {
    const { onClose } = useDisclosure()
    const [update,setUpdate] = useState(false)
    const [remove,setRemove] = useState(false)
    return (
        <tr className="bg-white border-b ">
            <th scope="row" className="px-2 py-2 font-medium whitespace-nowrap">
                {product.name}
            </th>
            <td className="px-6 py-2 text-center">
                {product?.generic?.name}
            </td>
            <td className="px-6 py-2 text-center">
                {product?.brand?.brand}
            </td>
            <td className="px-6 py-2 text-center">
                {product.sku} {product.sku_unit}
            </td>
            <td className="px-6 py-2 text-center">
                {product.type}
            </td>
            <td className="px-6 py-2 text-center">
                {product.price}
            </td>
            <td className="px-6 py-2 text-center">
                {product.quantity}
            </td>
            <td className="px-6 py-2 flex justify-center items-center space-x-2">
                <button 
                    onClick={()=>{
                        setUpdate(true);
                    }} 
                    className='p-2 bg-green-400 text-white rounded-md'
                >
                    Update
                </button>
                <button 
                    onClick={()=>{
                        setRemove(true)
                    }}
                    className='p-2 bg-red-500 text-white rounded-md'
                >
                    Delete
                </button>
                {update && <UpdateProduct {...{product, update, setUpdate, onClose}}/>}
                {remove && <DeleteProduct {...{product, remove, setRemove, onClose}}/>}
            </td>
        </tr>
    );
};

export default ProductListItem;
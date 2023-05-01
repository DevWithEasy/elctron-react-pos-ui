import React from 'react';

const ProductListItem = ({product,setCurrentProduct,update,setUpdate,deleteProduct,setDeleteProduct}) => {
    
    return (
        <tr className="bg-white border-b ">
            <th scope="row" className="px-2 py-2 font-medium whitespace-nowrap">
                {product.name}
            </th>
            <td className="px-6 py-2 text-center">
                {product.generic}
            </td>
            <td className="px-6 py-2 text-center">
                {product.brand}
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
                <button onClick={()=>{
                    setCurrentProduct(product);
                    setUpdate(!update)
                }} 
                    className='p-2 bg-blue-500 text-white rounded-md'>
                        Update
                </button>
                <button onClick={()=>{
                    setCurrentProduct(product);
                    setDeleteProduct(!deleteProduct)
                }} 
                    className='p-2 bg-red-500 text-white rounded-md'>
                        Delete
                </button>
            </td>
        </tr>
    );
};

export default ProductListItem;
import React, { useState } from 'react';
import ProductListItem from '../components/ProductListItem';
import AddProduct from '../components/products/AddProduct';
import DeleteProduct from '../components/products/DeleteProduct';
import UpdateProduct from '../components/products/UpdateProduct';

const Products = () => {
    const [name,setName] = useState('')
    const [products,setProducts] = useState([
        {
            id : 1,
            name : 'Demo Product 1',
            generic : 'phone',
            brand : 'Apple',
            sku : 10,
            sku_unit : 'ml',
            type : 'Tablet',
            price : 10,
            quantity : 10,
        },
        {
            id : 2,
            name : 'Demo Product 1',
            generic : 'phone',
            brand : 'Apple',
            sku : 10,
            sku_unit : 'ml',
            type : 'Tablet',
            price : 10,
            quantity : 10,
        },
        {
            id : 3,
            name : 'Demo Product 1',
            generic : 'phone',
            brand : 'Apple',
            sku : 10,
            sku_unit : 'ml',
            type : 'Tablet',
            price : 10,
            quantity : 10,
        },
        {
            id : 4,
            name : 'Demo Product 1',
            generic : 'phone',
            brand : 'Apple',
            sku : 10,
            sku_unit : 'ml',
            type : 'Tablet',
            price : 10,
            quantity : 10,
        },
        
    ])
    const [add,setAdd] = useState(false)
    const [currentProduct,setCurrentProduct] = useState({})
    const [update,setUpdate] = useState(false)
    const [deleteProduct,setDeleteProduct] = useState(false)
    return (
        <div className='p-4'>
            <div className='mb-2'>
                <button onClick={()=>setAdd(!add)} className='p-2 bg-green-400 text-white rounded-md'>Add new product</button>
            </div>
            <div className="relative overflow-x-auto space-y-3">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Generic
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Brand
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                SKU
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product=><ProductListItem key={product.id} {...{product,setCurrentProduct,update,setUpdate,deleteProduct,setDeleteProduct}}/>)
                        }
                        
                    </tbody>
                </table>
            </div>
            {add &&<AddProduct {...{add,setAdd}}/>}
            {update && <UpdateProduct {...{currentProduct,update,setUpdate}}/>}
            {deleteProduct && <DeleteProduct {...{currentProduct,deleteProduct,setDeleteProduct}}/>}
        </div>
    );
};

export default Products;
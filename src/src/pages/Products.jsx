import React from 'react';
import ProductListItem from '../components/ProductListItem';
import useProductStore from '../store/productStore';

const Products = () => {
    const {products} = useProductStore()
    return (
        <div className='p-4'>
            <div className="relative overflow-x-auto space-y-3">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-2 py-3">
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
                            products.map(product=><ProductListItem key={product._id} {...{product}}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;
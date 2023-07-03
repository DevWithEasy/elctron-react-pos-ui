import axios from 'axios';
import React, { useEffect } from 'react';
import Cart from '../components/Cart';
import Product from '../components/Product';
import useProductStore from '../store/productStore';
import api_url from '../utils/api_url';

const Home = () => {
    const {products,addProducts} = useProductStore()

    const getProducts = async() =>{
        try {
            const res = await axios.get(`${api_url}/product/`)

            addProducts(res.data.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    },[])

    return (
        <div className='mt-2'>
            <div className='absolute top-3 '>
                <input type="search"
                    placeholder='Seach By Name or Generic or Brand'
                  className='w-[350px] py-1 px-4 border border-gray-300 placeholder:text-gray-300 placeholder:italic rounded-full'
                />
            </div>
            <div className='flex justify-between'>
                <div className={` grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 overflow-y-auto`}>
                    {
                        products.map(product =><Product key={product._id} {...{product}}/>)
                    }
                </div>
                <Cart/>
            </div>
        </div>
    );
};

export default Home;
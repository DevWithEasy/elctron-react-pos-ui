import React, { useEffect, useState } from 'react';
import data from '../assets/products.json'
import Button from '../components/Button';
import Cart from '../components/Cart';
import Product from '../components/Product';
import useProductStore from '../store/productStore';
import {HiOutlineShoppingBag} from 'react-icons/hi'

const Home = () => {
    const {cart} = useProductStore()
    const [products,setProducts] = useState(data.products)
    const [categories,setCategories] = useState([])
    const [filter,setFilter] = useState(false)
    const [cartOpen,setCartOpen] = useState(false)
    const total = cart.reduce((total, cartItem) => total + cartItem.price * cartItem.qty,0)

    function findCategory(){
        setCategories([...new Set(data.products.map(product => product.category))])
    }
    function findProductByCategory(category){
        const findProducts = data.products.filter(product => product.category === category)
        setProducts(findProducts)
        setFilter(true)
    }
    function resetFilter(){
        setProducts(data.products)
        setFilter(false)
    }
    useEffect(()=>{
        findCategory()
    },[])
    
    return (
        <div className='mt-2'>
            {/* <div className='px-4 py-2 flex flex-wrap gap-2 sticky -top-0 bg-white'>
                {
                    categories.map((category,i) =><Button key={i} {...{category,findProductByCategory}}/>)
                }
                {
                    filter && <button onClick={()=>resetFilter()} className='capitalize p-2 border rounded bg-red-500 text-white'>
                        Reset Filter
                </button>
                }
            </div> */}
            <div className='absolute top-3 '>
                <input type="search"
                    placeholder='Seach By Name or Generic or Brand'
                  className='w-[350px] py-1 px-4 border border-gray-300 placeholder:text-gray-300 placeholder:italic rounded-full'
                />
            </div>
            <div className='flex justify-between'>
                <div className={` grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 overflow-y-auto`}>
                    {
                        products.map(product =><Product key={product.id} {...{product}}/>)
                    }
                </div>
                <Cart {...{cartOpen,setCartOpen}}/>
                <div className='absolute right-8 top-20 w-16 h-16 shadow-lg rounded-md text-sm'>
                    <p onClick={()=>setCartOpen(true)} className='h-16 p-2 flex flex-col  items-center bg-slate-400/80 hover:bg-slate-400 text-yellow-200 cursor-pointer'>
                        <HiOutlineShoppingBag size={25}/>
                        <span>{cart.length} Items</span>
                    </p>
                    <p className='text-center bg-slate-100'>${total}</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
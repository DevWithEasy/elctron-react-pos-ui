import { Modal } from 'flowbite-react';
import React, { useState } from 'react';
import handleChange from '../../utils/handleChange';

const UpdateProduct = ({currentProduct,update,setUpdate}) => {
    const [value,setValue] = useState(currentProduct)
    
    return (
        <div className='absolute top-0 left-0 h-screen w-full p-4 bg-slate-700/60 overflow-y-auto'>
            <div className='w-5/12 mx-auto bg-white rounded-md'>
            <div className="space-y-3 p-6">
                    <div className='flex justify-between p-2'>
                        <h3 className="text-xl font-medium text-gray-900">
                            Update Product
                        </h3>
                        <button className='text-2xl' onClick={()=>setUpdate(!update)}>X</button>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="">Name :</label>
                        <input 
                            type='text' 
                            name='name'
                            value={value.name} 
                            onChange={(e)=>handleChange(e,value,setValue)} 
                            className='w-full p-2 rounded-md border border-gray-300'
                        />
                    </div>
                    <div className='flex space-x-2'>
                        <div className='w-6/12 space-y-2'>
                            <label htmlFor="">Price :</label>
                            <input 
                                type='text' 
                                name='price'
                                value={value.price} 
                                onChange={(e)=>handleChange(e,value,setValue)} className='w-full p-2 rounded-md border border-gray-300'
                            />
                        </div>
                        <div className='w-6/12 space-y-2'>
                            <label htmlFor="">Quntity :</label>
                            <input 
                                type='text'
                                name='quantity'
                                value={value.quantity} 
                                onChange={(e)=>handleChange(e,value,setValue)} className='w-full p-2 rounded-md border border-gray-300'
                            />
                        </div>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='w-6/12 space-y-2'>
                            <label htmlFor="">SKU :</label>
                            <input 
                                type='text' 
                                name='sku'
                                value={value.sku} 
                                onChange={(e)=>handleChange(e,value,setValue)} className='w-full p-2 rounded-md border border-gray-300'
                            />
                        </div>
                        <div className='w-6/12 space-y-2'>
                            <label htmlFor="">SKU Unit :</label>
                            <select
                                name='sku_unit'
                                value={value.sku_unit}
                                onChange={(e)=>handleChange(e,value,setValue)}
                                className='w-full p-2 rounded-md border border-gray-300'
                            >
                                <option value="mg">mg</option>
                                <option value="ml">ml</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='w-6/12 space-y-2'>
                            <label htmlFor="">Generic :</label>
                            <select
                                name='generic'
                                value={value.generic}
                                onChange={(e)=>handleChange(e,value,setValue)}
                                className='w-full p-2 rounded-md border border-gray-300'
                            >
                                <option value="">select generic</option>
                            </select>
                        </div>
                        <div className='w-6/12 space-y-2'>
                            <label htmlFor="">Brand :</label>
                            <select
                                name='brand'
                                value={value.brand}
                                onChange={(e)=>handleChange(e,value,setValue)}
                                className='w-full p-2 rounded-md border border-gray-300'
                            >
                                <option value="">select Brand</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='w-6/12 space-y-2'>
                            <label htmlFor="">Type :</label>
                            <select
                                name='type'
                                value={value.type}
                                onChange={(e)=>handleChange(e,value,setValue)}
                                className='w-full p-2 rounded-md border border-gray-300'
                            >
                                <option value="Tablet">Tablet</option>
                                <option value="Capsule">Capsule</option>
                                <option value="Syrup">Syrup</option>
                            </select>
                        </div>
                    </div>
                    
                    <button onClick={()=>{
                        
                    }} 
                        className='px-4 py-2 bg-blue-500 text-white rounded-md'>
                            Add Product
                    </button>
            </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
import React, { useState } from 'react';


const ApplyForAccount = ({apply,setApply}) => {
    const [value,setValue] = useState({
    })

    return (
        <div className='absolute top-0 left-0 h-screen w-full p-4 bg-slate-500/60 overflow-y-auto flex justify-center items-center'>
            <div className='w-5/12 bg-white rounded-md'>
            <div className="space-y-3 p-6">
                    <div className='flex justify-between p-2'>
                        <h3 className="text-xl font-medium text-gray-900">
                            Apply For New Account
                        </h3>
                        <button className='text-2xl' onClick={()=>setApply(!apply)}>X</button>
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
                        <label htmlFor="">Name :</label>
                        <input 
                            type='text' 
                            name='name'
                            value={value.name} 
                            onChange={(e)=>handleChange(e,value,setValue)} 
                            className='w-full p-2 rounded-md border border-gray-300'
                        />
                        <label htmlFor="">Name :</label>
                        <input 
                            type='text' 
                            name='name'
                            value={value.name} 
                            onChange={(e)=>handleChange(e,value,setValue)} 
                            className='w-full p-2 rounded-md border border-gray-300'
                        />
                        <label htmlFor="">Name :</label>
                        <input 
                            type='text' 
                            name='name'
                            value={value.name} 
                            onChange={(e)=>handleChange(e,value,setValue)} 
                            className='w-full p-2 rounded-md border border-gray-300'
                        />
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

export default ApplyForAccount;
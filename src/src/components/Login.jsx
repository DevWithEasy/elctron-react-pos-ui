import React, { useState } from 'react';
import handleChange from '../utils/handleChange';
import ApplyForAccount from './applyForAccout';

const Login = () => {
    const [apply,setApply] = useState(false)
    const [value,setValue] = useState({
        email : '',
        password : ''
    })
    return (
        <div className='absolute top-0 left-0 h-screen w-full p-4 bg-[#f2f6fd]/60 overflow-y-auto flex justify-center items-center'>
            <div className='w-5/12 mx-auto bg-white rounded-md px-6 pt-6'>
                <div className='space-y-2'>
                    <input 
                        type='text' 
                        name='name'
                        value={value.name} 
                        onChange={(e)=>handleChange(e,value,setValue)}
                        placeholder='Enter email address' 
                        className='w-full p-2 rounded-md border border-gray-300 placeholder:text-gray-300'
                    />
                    <input 
                        type='text' 
                        name='name'
                        value={value.name} 
                        onChange={(e)=>handleChange(e,value,setValue)}
                        placeholder='Enter your password'  
                        className='w-full p-2 rounded-md border border-gray-300 placeholder:text-gray-300'
                    />
                    <button
                        className='w-full p-2 rounded-md bg-slate-400 hover:bg-slate-500 text-white'
                    >
                        Login Account
                    </button>
                </div>
                <p 
                    className='p-2 text-center text-blue-500 cursor-pointer'
                    onClick={()=>setApply(!apply)}
                >
                    Apply for an account
                </p>
            </div>
            {apply && <ApplyForAccount {...{apply,setApply}}/>}
        </div>
    );
};

export default Login;
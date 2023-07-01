import axios from 'axios';
import React, { useState } from 'react';
import handleChange from '../utils/handleChange';
import api_url from '../utils/api_url';
import useUserStore from '../store/userStore';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const {addUser} = useUserStore()
    const navigate= useNavigate()

    const [value,setValue] = useState({
        email : '',
        password : ''
    })

    const signin=async()=>{
        try {
            const res = await axios.post(`${api_url}/auth/signin`,value)

            localStorage.setItem('token',res.data.token)

            addUser(res.data.data)
            
            navigate('/')
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-1/2 mt-5 mx-auto space-y-2'>
            <h1 className='text-center text-xl'>Signin account</h1>
            <input 
                type='text' 
                name='email'
                onChange={(e)=>handleChange(e,value,setValue)}
                placeholder='Enter email or phone number' 
                className='w-full p-2 rounded-md border border-gray-300 placeholder:text-gray-300'
            />
            <input 
                type='text' 
                name='password'
                onChange={(e)=>handleChange(e,value,setValue)}
                placeholder='Enter password' 
                className='w-full p-2 rounded-md border border-gray-300 placeholder:text-gray-300'
            />
            <button
                onClick={()=>signin()}
                className='w-full p-2 text-center bg-blue-500 text-white rounded-lg'
            >
                Signin
            </button>
        </div>
    );
};

export default Signin;
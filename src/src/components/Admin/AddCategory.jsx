import { Modal } from 'flowbite-react';
import React, { useState } from 'react';

const AddCategory = ({}) => {
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    return (
        <Modal
            show={add}
            size="xl"
            popup={true}
            onClose={()=>setAdd(!add)}
            className=''
        >
            <Modal.Header />
            <Modal.Body>
            <div className="space-y-6 px-6 pb-4">
                <h3 className="text-xl font-medium text-gray-900">
                Add new category
                </h3>
                <div className='space-y-2'>
                    <label htmlFor="">Name :</label>
                    <input type='text' name='name' onChange={(e)=>setName(e.target.value)} className='w-full p-2 rounded-md border border-gray-300'/>
                </div>
                <button onClick={()=>{
                    
                }} 
                    className='px-4 py-2 bg-blue-500 text-white rounded-md'>
                        Add Product
                </button>
            </div>
            </Modal.Body>
        </Modal>
    );
};

export default AddCategory;
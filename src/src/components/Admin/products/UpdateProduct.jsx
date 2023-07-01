import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import api_url from '../../../utils/api_url';
import { updateData } from '../../../utils/crud_utils';
import handleChange from '../../../utils/handleChange';
import Loading from '../../Loading';

const UpdateProduct = ({product, update, setUpdate, onClose}) => {
    const [value,setValue] = useState(product)
    const [brands,setBrands] = useState([])
    const [generics,setGenerics] = useState([])
    const [loading,setLoading] = useState(false)

    const getData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${api_url}/product/findGenericBrand`)
            if(res.data.status ===200){
                setBrands(res.data.data.brands)
                setGenerics(res.data.data.generics)
                setLoading(false)
            } 
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    },[])
    
    return (
        <>
            <Modal isOpen={update} onClose={()=>{
                onClose()
                setUpdate(false)
            }}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Update product
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className="space-y-2">
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
                            {loading && <Loading msg='finding generic and brand'/>}
                            <div className='flex space-x-2'>
                                <div className='w-6/12 space-y-2'>
                                    <label htmlFor="">Generic :</label>
                                    <select
                                        name='generic'
                                        value={value.generic}
                                        onChange={(e)=>handleChange(e,value,setValue)}
                                        className='w-full p-2 rounded-md border border-gray-300'
                                    >
                                        {
                                            generics.map((generic) => <option key={generic._id} value={generic._id}>{generic.name}</option>)
                                        }
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
                                        {
                                            brands.map((brand) => <option key={brand._id} value={brand._id}>{brand.brand}</option>)
                                        }
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
                    </div>
                </ModalBody>
    
                <ModalFooter>
                <Button colorScheme='gray' mr={3} onClick={()=>{
                    onClose()
                    setUpdate(false)
                }}>
                    Close
                </Button>
                <Button 
                    colorScheme='blue'
                    onClick={()=>updateData('product',value)}
                >
                    Submit
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    );
};

export default UpdateProduct;
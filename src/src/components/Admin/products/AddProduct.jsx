import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useToast
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import api_url from '../../../utils/api_url';
import handleChange from '../../../utils/handleChange';
import toast_alert from '../../../utils/toast_alert';
import Loading_request from '../../Loding_request';

const AddProduct = ({addProduct,setAddProduct,onClose}) => {
    const toast = useToast()
    const [loading,setLoading] = useState(false)
    const [companies,setCompanies] = useState([])
    const [generics,setGenerics] = useState([])
    const [value,setValue] = useState({
        name : '',
        generic : '',
        company : '',
        sku : '',
        sku_unit : 'mg',
        type : 'Tablet',
        price : '',
        quantity : 0,
    })

    const createProduct= async() => {
        try {
            setLoading(true)
            const res = await axios.post(`${api_url}/product/create`,value,{
                headers: {
                    authorization : localStorage.getItem('token')
                }
            })
            if (res.status === 200){
                setAddProduct(false)
                setLoading(false)
                onClose()
                toast_alert(
                    toast,
                    res.data.message
                )
            }
            
        } catch (error) {
            setLoading(false)
            toast_alert(
                toast,
                error.response.data.message,
                'error'
            )
        }
    }

    const getData = async () => {
        try {
            const res = await axios.get(`${api_url}/product/findGenericBrand`)
            setCompanies(res.data.data.companies)
            setGenerics(res.data.data.generics)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <>
        <Modal isOpen={addProduct} onClose={()=>{
            setAddProduct(false)
            onClose()
        }}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add new product</ModalHeader>
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
                                disabled
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
                                <option value="">Select SKU</option>
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
                                {
                                    generics.map((generic) => <option key={generic._id} value={generic._id}>{generic.name}</option>)
                                }
                            </select>
                        </div>
                        <div className='w-6/12 space-y-2'>
                            <label htmlFor="">Company :</label>
                            <select
                                name='company'
                                value={value.company}
                                onChange={(e)=>handleChange(e,value,setValue)}
                                className='w-full p-2 rounded-md border border-gray-300'
                            >
                                <option value="">select Brand</option>
                                {
                                    companies.map((company) => <option key={company._id} value={company._id}>{company.name}</option>)
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
                                <option value="">Select type</option>
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
                 setAddProduct(false)
                 onClose()
              }}>
                Close
              </Button>
              <Button 
                onClick={()=>createProduct()}
                colorScheme='blue'
              >
               Submit
              </Button>
              <Loading_request {...{loading,setLoading}}/>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
};

export default AddProduct;
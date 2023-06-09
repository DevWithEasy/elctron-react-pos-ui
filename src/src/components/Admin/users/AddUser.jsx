import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { createData } from '../../../utils/crud_utils';
import handleChange from '../../../utils/handleChange';
import Loading_request from '../../Loding_request';

const AddUser = () => {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loading,setLoading] = useState(false)
    const [value,setValue] = useState({
      name : '',
      email : '',
      phone : '',
      password : ''
    })
  return (
    <>
      <button 
        onClick={onOpen}
        className='bg-blue-50 p-2 rounded'
      >
        Add user
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='space-y-2'>
                <label htmlFor="">Name :</label>
                <input 
                    type='text' 
                    name='name'
                    onChange={(e)=>handleChange(e,value,setValue)} 
                    className='w-full p-2 rounded-md border border-gray-300'
                />
            </div>
            <div className='space-y-2'>
                <label htmlFor="">Email address :</label>
                <input 
                    type='text' 
                    name='email'
                    onChange={(e)=>handleChange(e,value,setValue)} 
                    className='w-full p-2 rounded-md border border-gray-300'
                />
            </div>
            <div className='space-y-2'>
                <label htmlFor="">Phone number :</label>
                <input 
                    type='text' 
                    name='phone'
                    onChange={(e)=>handleChange(e,value,setValue)} 
                    className='w-full p-2 rounded-md border border-gray-300'
                />
            </div>
            <div className='space-y-2'>
                <label htmlFor="">Password :</label>
                <input 
                    type='text' 
                    name='password'
                    onChange={(e)=>handleChange(e,value,setValue)} 
                    className='w-full p-2 rounded-md border border-gray-300'
                />
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='gray' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button 
              onClick={()=>createData('auth',value,setLoading,onClose,toast)}
              colorScheme='blue'
            >
              Submit
            </Button>
            <Loading_request {...{loading,setLoading}}/>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
};

export default AddUser;
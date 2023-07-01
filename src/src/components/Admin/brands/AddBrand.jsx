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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { createData } from '../../../utils/crud_utils';
import handleChange from '../../../utils/handleChange';

const AddBrand = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value,setValue] = useState({
      company : '',
      brand : ''
    })
  return (
    <>
      <button 
        onClick={onOpen}
        className='p-2 bg-blue-100 rounded-md'
      >
        Add Brand
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new brand</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <div className='space-y-2'>
                <label htmlFor="">Company Name :</label>
                <input 
                    type='text' 
                    name='company'
                    onChange={(e)=>handleChange(e,value,setValue)} 
                    className='w-full p-2 rounded-md border border-gray-300'
                />
            </div>
            <div className='space-y-2'>
                <label htmlFor="">Brand Name :</label>
                <input 
                    type='text' 
                    name='brand'
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
              onClick={()=>createData('brand',value)}
              colorScheme='blue'
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
};

export default AddBrand;
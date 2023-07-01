import React, { useState } from 'react';
import { updateData } from '../../../utils/crud_utils';
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

const UpdateBrand = ({brand, update, setUpdate, onClose}) => {
    const [value,setValue] = useState(brand)
    return (
        <>
            <Modal isOpen={update} onClose={()=>{
                onClose()
                setUpdate(false)
            }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update brand</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <div className='space-y-2'>
                <label htmlFor="">Company Name :</label>
                <input 
                    type='text' 
                    name='company'
                    value={value.company}
                    onChange={(e)=>handleChange(e,value,setValue)} 
                    className='w-full p-2 rounded-md border border-gray-300'
                />
            </div>
            <div className='space-y-2'>
                <label htmlFor="">Brand Name :</label>
                <input 
                    type='text' 
                    name='brand'
                    value={value.brand}
                    onChange={(e)=>handleChange(e,value,setValue)} 
                    className='w-full p-2 rounded-md border border-gray-300'
                />
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
              onClick={()=>updateData('brand',value)}
              colorScheme='blue'
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    );
};

export default UpdateBrand;
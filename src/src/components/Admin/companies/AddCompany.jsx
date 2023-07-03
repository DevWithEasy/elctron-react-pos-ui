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

const AddCompany = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value,setValue] = useState({
      name : ''
    })
  return (
    <>
      <button 
        onClick={onOpen}
        className='w-full text-left'
      >
        Add Company
      </button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new company</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <div className='space-y-2'>
                <label htmlFor="">Company Name :</label>
                <input 
                    type='text' 
                    name='name'
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
              onClick={()=>createData('company',value)}
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

export default AddCompany;
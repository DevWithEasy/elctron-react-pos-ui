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

const AddGeneric = () => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loading,setLoading] = useState(false)
    const [value,setValue] = useState({
      name : ''
    })
  return (
    <>
      <button 
        onClick={onOpen}
        className='bg-blue-50 p-2 rounded'
      >
        Add Generic
      </button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new generic</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='space-y-2'>
                <label htmlFor="">Generic Name :</label>
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
              onClick={()=>createData('generic',value,setLoading,onClose,toast)}
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

export default AddGeneric;
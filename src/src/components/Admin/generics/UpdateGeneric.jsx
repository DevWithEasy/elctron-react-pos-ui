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

const UpdateGeneric = ({generic, update, setUpdate, onClose}) => {
    const [value,setValue] = useState(generic)
    return (
        <>
            <Modal isOpen={update} onClose={()=>{
                    onClose()
                    setUpdate(false)
            }}>
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
                    value={value.name}
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
              onClick={()=>updateData('generic',value)}
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

export default UpdateGeneric;
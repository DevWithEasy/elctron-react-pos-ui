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
import React, { useState } from 'react';
import { updateData } from '../../../utils/crud_utils';
import handleChange from '../../../utils/handleChange'

const UpdateCompany = ({company, update, setUpdate, onClose}) => {
    const [value,setValue] = useState(company)
    return (
        <>
            <Modal isOpen={update} onClose={()=>{
                onClose()
                setUpdate(false)
            }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update company</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <div className='space-y-2'>
                <label htmlFor="">Company Name :</label>
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
              onClick={()=>updateData('company',value)}
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

export default UpdateCompany;
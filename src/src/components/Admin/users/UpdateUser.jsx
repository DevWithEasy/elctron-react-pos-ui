import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { updateData } from '../../../utils/crud_utils';
import handleChange from '../../../utils/handleChange';

const UpdateUser = ({user,update, setUpdate, onClose}) => {
    const [value,setValue] = useState(user)
    return (
        <>
            <Modal isOpen={update} onClose={()=>{
                onClose()
                setUpdate(false)
            }}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Update user</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
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
                <div className='space-y-2'>
                    <label htmlFor="">Email address :</label>
                    <input 
                        type='text' 
                        name='email'
                        value={value.email}
                        onChange={(e)=>handleChange(e,value,setValue)} 
                        className='w-full p-2 rounded-md border border-gray-300'
                    />
                </div>
                <div className='space-y-2'>
                    <label htmlFor="">Phone number :</label>
                    <input 
                        type='text' 
                        name='phone'
                        value={value.phone}
                        onChange={(e)=>handleChange(e,value,setValue)} 
                        className='w-full p-2 rounded-md border border-gray-300'
                    />
                </div>
                <div className='space-y-2'>
                    <label htmlFor="">Password :</label>
                    <input 
                        type='text' 
                        name='password'
                        value={value.password}
                        onChange={(e)=>handleChange(e,value,setValue)} 
                        className='w-full p-2 rounded-md border border-gray-300'
                        disabled={false}
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
                onClick={()=>updateData('auth',value)}
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

export default UpdateUser;
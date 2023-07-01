import React from 'react';
import { deleteData } from '../../../utils/crud_utils';

const DeleteBrand = ({brand, remove, setRemove, onClose}) => {
    return (
        <>
            <AlertDialog
            isOpen={remove}
            leastDestructiveRef={cancelRef}
            onClose={()=>{
              setRemove(false)
              onClose()
            }}
            isCentered
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                  Delete Customer
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={()=>{
                    setRemove(false)
                    onClose()
                  }}>
                    Cancel
                  </Button>
                  <Button colorScheme='red' onClick={()=>deleteData('product',brand)} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </>
    );
};

export default DeleteBrand;
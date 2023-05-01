import { Button, Modal } from 'flowbite-react';
import React from 'react';
import{HiOutlineExclamationCircle} from 'react-icons/hi'

const DeleteProduct = ({currentProduct,deleteProduct,setDeleteProduct}) => {
    return (
        <div className='absolute top-0 left-0 h-screen w-full p-4 bg-gray-700/50 overflow-y-auto flex justify-center items-center'>
            <div className='w-4/12 mx-auto bg-white rounded-md'>
                <div className="text-center p-6">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                    </h3>
                    <div className="flex justify-center gap-4">
                    <Button
                        color="failure"
                        onClick={()=>setDeleteProduct(!deleteProduct)}
                    >
                        Yes, I'm sure
                    </Button>
                    <Button
                        color="gray"
                        onClick={()=>setDeleteProduct(!deleteProduct)}
                    >
                        No, cancel
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;
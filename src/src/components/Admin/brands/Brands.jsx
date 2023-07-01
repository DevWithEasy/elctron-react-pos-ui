import React, { useState } from 'react';
import useUserStore from '../../../store/userStore';
import { useDisclosure } from '@chakra-ui/react';
import UpdateBrand from './UpdateBrand';
import DeleteBrand from './DeleteBrand';

const Brands = () => {
    const {brands} = useUserStore()
    const { onClose } = useDisclosure()
    const [update,setUpdate] = useState(false)
    const [remove,setRemove] = useState(false)
    return (
        <div>
            <div className="relative overflow-x-auto space-y-3">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                Sl
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Company name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Brand name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            brands.map((brand,i)=><tr key={brand._id}>
                                <td className="px-6 py-3 text-center">{i+1}</td>
                                <td className="px-6 py-3 text-center">{brand?.company}</td>
                                <td className="px-6 py-3 text-center">{brand?.brand}</td>
                                <td className="px-6 py-3 text-center space-x-2">
                                    <button 
                                        onClick={()=>{
                                            setUpdate(true);
                                        }} 
                                        className='p-2 bg-green-400 text-white rounded-md'
                                    >
                                        Update
                                    </button>
                                    <button 
                                        onClick={()=>{
                                            setRemove(true)
                                        }}
                                        className='p-2 bg-red-500 text-white rounded-md'
                                    >
                                        Delete
                                    </button>
                                    {update && <UpdateBrand {...{brand, update, setUpdate, onClose}}/>}
                                    {remove && <DeleteBrand {...{brand, remove, setRemove, onClose}}/>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Brands;
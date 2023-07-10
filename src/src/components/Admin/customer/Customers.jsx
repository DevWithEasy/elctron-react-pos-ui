import React, { useState } from 'react';
import useUserStore from '../../../store/userStore';
import { useDisclosure } from '@chakra-ui/react';
import UpdateCustomer from './UpdateCustomer';
import DeleteCustomer from './DeleteCutomer';

const Customers = () => {
    const {customers} = useUserStore()
    const { onClose } = useDisclosure()
    const [update,setUpdate] = useState(false)
    const [remove,setRemove] = useState(false)
    return (
        <div>
            <div className="relative overflow-x-auto space-y-3">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-blue-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                Sl
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Customer name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Customer phone
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Paid
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Customer status
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((customer,i)=><tr key={customer._id}>
                                <td className="px-6 py-3 text-center">{i+1}</td>
                                <td className="px-6 py-3 text-center">{customer?.name}</td>
                                <td className="px-6 py-3 text-center">{customer?.phone}</td>
                                <td className="px-6 py-3 text-center">{customer?.paid}</td>
                                <td className="px-6 py-3 text-center">{customer?.status}</td>
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
                                    {update && <UpdateCustomer {...{customer, update, setUpdate, onClose}}/>}
                                    {remove && <DeleteCustomer {...{customer, remove, setRemove, onClose}}/>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Customers;
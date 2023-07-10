import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../store/productStore';
import api_url from '../utils/api_url';

const Invoices = () => {
    const {invoices,addInvoices} = useProductStore()
    const navigate = useNavigate()
    const getInvoices = async() =>{
        try {
            const res = await axios.get(`${api_url}/invoice/` , {
                headers: {
                    authorization : localStorage.getItem('token')
                }
            })
            addInvoices(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getInvoices()
    },[])
    
    return (
        <div className='p-4'>
            <h1 className='text-2xl text-center font-bold uppercase'>Invoices</h1>
            <input type="search"
                placeholder='Search by invoice last 4 leter'
                className='w-[350px] py-1 px-4 mb-2 border focus:outline-none placeholder:text-gray-300 placeholder:italic rounded-full'
            />
            <div className="relative overflow-x-auto space-y-3">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-blue-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                Invoice Id
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Customer name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Customer Number
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Total
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Discount
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Paid
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            invoices.map((invoice) => <tr 
                                key={invoice._id}
                                onClick={()=>navigate(`/invoices/${invoice._id}`)}
                                className='cursor-pointer hover:bg-blue-100'
                            >
                                <td className="px-6 py-3 text-center">
                                    {invoice?._id}
                                </td>
                                <td className="px-6 py-3 text-center">
                                    {invoice?.customer?.name}
                                </td>
                                <td className="px-6 py-3 text-center">
                                    {invoice?.customer?.phone}
                                </td>
                                <td className="px-6 py-3 text-center">
                                    {invoice?.total}
                                </td>
                                <td className="px-6 py-3 text-center">
                                    {invoice?.discount}
                                </td>
                                <td className="px-6 py-3 text-center">
                                    {invoice?.paid}
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Invoices;
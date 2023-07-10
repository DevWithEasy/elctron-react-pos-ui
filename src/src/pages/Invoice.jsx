import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from "react-to-print";
import api_url from '../utils/api_url';

const Invoice = () => {
    const {id} = useParams()
    const printRef = useRef()
    const [invoice,setInvoice] = useState({})
    const getInvoice = async() =>{
        try {
            const res = await axios.get(`${api_url}/invoice/${id}` , {
                headers: {
                    authorization : localStorage.getItem('token')
                }
            })
            setInvoice(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handlePrint = useReactToPrint({
        content : ()=> printRef.current,
        documentTitle : invoice?._id
    })

    useEffect(() => {
        getInvoice()
    },[])

    console.log(invoice)
    return (
        <div
            ref={printRef}
            className='p-4 print:mx-10 my-5'
        >
            <div className='flex justify-between items-center'>
                <div className='h-20 w-20 bg-blue-500 rounded-full'>

                </div>
                <div className=''>
                    <p>Demo Pharmacy</p>
                    <p>Address Here are</p>
                    <p><b>Reg No :</b> BSC-2392 </p>
                    <p>
                        <b>Phone :</b> 01700000000,
                    </p>
                    <p> 
                        <b>Email :</b> 01700000000 
                    </p>

                </div>
            </div>
            <hr className='my-5'/>
            <div className='flex justify-between items-center px-5'>
                <div className='flex space-x-4'>
                    <p>Bill to : </p>
                    <div>
                        <p>
                            {invoice?.customer?.name}
                        </p>
                        <p>
                            {invoice?.customer?.phone}
                        </p>
                    </div>
                </div>
                <div>
                    <p>
                        <b>Invoice No : </b>
                        {invoice?._id}
                    </p>
                    <p>
                        <b>Invoice Date : </b>
                        {new Date(invoice?.createdAt).toDateString()}
                    </p>
                    <p>
                        <b>Created by : </b>
                        {invoice?.user?.name}
                    </p>
                </div>
            </div>

            <div className='my-5'>
                <div className="relative overflow-x-auto space-y-3 px-5">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left">
                                    Sl
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    SKU
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3 text-right">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                invoice.products && invoice.products.map((product,i) => <tr 
                                    key={product._id}
                                    className='cursor-pointer hover:bg-blue-100'
                                >
                                    <td className="px-6 py-3 text-left">
                                        {i+1}
                                    </td>
                                    <td className="px-6 py-3 text-center">
                                        {product?.name}
                                    </td>
                                    <td className="px-6 py-3 text-center">
                                        {product?.sku} {product?.sku_unit}
                                    </td>
                                    <td className="px-6 py-3 text-center">
                                        {product?.price}
                                    </td>
                                    <td className="px-6 py-3 text-center">
                                        {product?.quantity}
                                    </td>
                                    <td className="px-6 py-3 text-right">
                                        {invoice?.paid}
                                    </td>
                                </tr>
                                )
                            }
                            <tr className='border-t'>
                                    <td colSpan='3' className="px-6 py-3 text-center">
                                        
                                    </td>
                                    <td colSpan='2' className="px-6 py-3 text-left">
                                        Subtotal
                                    </td>
                                    <td className="px-6 py-3 text-right">
                                        {invoice?.total}
                                    </td>
                            </tr>
                            <tr>
                                    <td colSpan='3' className="px-6 py-3 text-center">
                                        
                                    </td>
                                    <td colSpan='2' className="px-6 py-3 text-left border-b">
                                        Discount
                                    </td>
                                    <td className="px-6 py-3 text-right border-b">
                                        {invoice?.discount}
                                    </td>
                            </tr>
                            <tr>
                                    <td colSpan='3' className="px-6 py-3 text-center">
                                        
                                    </td>
                                    <td colSpan='2' className="px-6 py-3 font-bold text-left">
                                        Total Paid
                                    </td>
                                    <td className="px-6 py-3 text-right">
                                        {invoice?.paid}
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='px-5'>
                <p className='font-bold'>Terms and Conditions</p>
                <p>* After sale product and value not refundable.</p>
                <button
                    onClick={()=>handlePrint()}
                >
                    Print
                </button>
            </div>
        </div>
    );
};

export default Invoice;
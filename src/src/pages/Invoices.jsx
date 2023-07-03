import React from 'react';

const Invoices = () => {
    return (
        <div className='p-4'>
            <div className="relative overflow-x-auto space-y-3">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Invoice Id
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Customer name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Customer Number
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Invoices;
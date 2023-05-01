import React from 'react';
import { RxCrossCircled } from 'react-icons/rx';

const Dashboard = () => {
    return (
        <div className='mx-4'>
            <h1 className='text-center text-3xl font-bold p-2 uppercase'>Dashborad</h1>
            <div className='flex justify-between text-white gap-x-3'>
                <div className='w-3/12 bg-green-400 flex items-center rounded-md p-2 space-x-4'>
                    <RxCrossCircled size={40} className='shrink-0'/>
                    <div>
                        <p>Total Products : </p>
                        <p className='text-2xl font-bold'>10</p>
                    </div>
                </div>
                <div className='w-3/12 bg-cyan-400 flex items-center rounded-md p-2 space-x-4'>
                    <RxCrossCircled size={40} className='shrink-0'/>
                    <div>
                        <p>Total Inwards Value : </p>
                        <p className='text-2xl font-bold'>10</p>
                    </div>
                </div>
                <div className='w-3/12 bg-red-400 flex items-center rounded-md p-2 space-x-4'>
                    <RxCrossCircled size={40} className='shrink-0'/>
                    <div>
                        <p>Total Outwards Value : </p>
                        <p className='text-2xl font-bold'>10</p>
                    </div>
                </div>
                <div className='w-3/12 bg-teal-400 flex items-center rounded-md p-2 space-x-4'>
                    <RxCrossCircled size={40} className='shrink-0'/>
                    <div>
                        <p>Total Benifits Value : </p>
                        <p className='text-2xl font-bold'>10</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
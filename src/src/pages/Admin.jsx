import React, { useEffect, useState } from 'react';
import AddBrand from '../components/Admin/brands/AddBrand';
import AddGeneric from '../components/Admin/generics/AddGeneric';
import AddProduct from '../components/Admin/products/AddProduct';
import AddUser from '../components/Admin/users/AddUser';
import { Tabs, TabList, TabPanels, Tab, TabPanel,useDisclosure } from '@chakra-ui/react'
import Users from '../components/Admin/users/Users';
import Brands from '../components/Admin/brands/Brands';
import Generics from '../components/Admin/generics/Generics';
import axios from 'axios';
import api_url from '../utils/api_url';
import useUserStore from '../store/userStore';

const Admin = () => {
    const {addUsers,addBrands,addGenerics} = useUserStore()
    const { onClose } = useDisclosure()
    const [addProduct,setAddProduct] = useState(false)

    const getData = async() =>{
        try {
            const res = await axios.get(`${api_url}/auth/admin`,{
                headers: {
                    authorization : localStorage.getItem('token')
                }
            })
            addUsers(res.data.data.users)
            addBrands(res.data.data.brands)
            addGenerics(res.data.data.generics)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])
    return (
        <div>
            <div className='p-2 space-x-2'>
                <AddUser/>
                <AddGeneric/>
                <AddBrand/>
                <button 
                    onClick={()=>setAddProduct(true)}
                    className='p-2 bg-blue-100 rounded-md'
                >
                    Add Product
                </button>
                {addProduct && <AddProduct {...{addProduct,setAddProduct,onClose}}/>}
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Users</Tab>
                        <Tab>Brands</Tab>
                        <Tab>Generics</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Users/>
                        </TabPanel>
                        <TabPanel>
                            <Brands/>
                        </TabPanel>
                        <TabPanel>
                            <Generics/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    );
};

export default Admin;
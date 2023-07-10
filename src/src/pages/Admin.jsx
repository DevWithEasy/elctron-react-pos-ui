import { Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure,  Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddCompany from '../components/Admin/companies/AddCompany';
import Companies from '../components/Admin/companies/Companies';
import Customers from '../components/Admin/customer/Customers';
import AddGeneric from '../components/Admin/generics/AddGeneric';
import Generics from '../components/Admin/generics/Generics';
import AddProduct from '../components/Admin/products/AddProduct';
import AddUser from '../components/Admin/users/AddUser';
import Users from '../components/Admin/users/Users';
import useUserStore from '../store/userStore';
import api_url from '../utils/api_url';
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'

const Admin = () => {
    const navigate = useNavigate()
    const {addUsers,addCompanies,addGenerics,addCustomers} = useUserStore()
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
            addCompanies(res.data.data.companies)
            addGenerics(res.data.data.generics)
            addCustomers(res.data.data.customers)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])
    
    return (
        <div className='p-4 space-y-2'>
            <div className='grid grid-cols-2 md:grid-cols-6  gap-3'>
                <AddUser/>
                <AddGeneric/>
                <AddCompany/>
                <button 
                    onClick={()=>setAddProduct(true)}
                    className='bg-blue-50 p-2 rounded'
                >
                    Add Product
                </button>
                <button 
                    onClick={()=>navigate('/admin/investment')}
                    className='bg-blue-50 p-2 rounded'
                >
                    Add Investment
                </button>
                {addProduct && <AddProduct {...{addProduct,setAddProduct,onClose}}/>}
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Users</Tab>
                        <Tab>Companies</Tab>
                        <Tab>Generics</Tab>
                        <Tab>Customers</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Users/>
                        </TabPanel>
                        <TabPanel>
                            <Companies/>
                        </TabPanel>
                        <TabPanel>
                            <Generics/>
                        </TabPanel>
                        <TabPanel>
                            <Customers/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    );
};

export default Admin;
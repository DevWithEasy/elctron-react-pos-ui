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
        <div>
            <div className='p-2 space-x-2'>
                <Menu>
                    <MenuButton>
                        <button className='flex items-center space-x-1 px-4 py-1 border rounded-md text-white bg-blue-500'>
                            <AiOutlinePlusCircle/>
                            <span>Add</span>
                        </button>
                    </MenuButton>
                    <MenuList>
                        <MenuItem >
                            <AddUser/>
                        </MenuItem>
                        <MenuItem>
                            <AddGeneric/>
                        </MenuItem>
                        <MenuItem>
                            <AddCompany/>
                        </MenuItem>
                        <MenuItem>
                            <button 
                                onClick={()=>setAddProduct(true)}
                                className='w-full text-left'
                            >
                                Add Product
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button 
                                onClick={()=>navigate('/investment')}
                                className='w-full text-left'
                            >
                                Add Investment
                            </button>
                        </MenuItem>
                    </MenuList>
                </Menu>

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
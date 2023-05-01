import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import Customers from './pages/Customers'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Invoices from './pages/Invoices'
import Layout from './pages/Layout'
import Order from './pages/Order'
import Products from './pages/Products'

function App() {
  const routes= useRoutes([
    {
      path : '/',
      element : <Layout/>,
      children : [
        {
          index : true,
          element : <Home/>,
        },
        {
          path : '/dashboard',
          element : <Dashboard/>,
        },
        {
          path : '/products',
          element : <Products/>,
        },
        {
          path : '/order',
          element : <Order/>,
        },
        {
          path : '/invoices',
          element : <Invoices/>,
        },
        {
          path : '/customers',
          element : <Customers/>,
        } 
      ]
    }
  ])

  return routes
}

export default App

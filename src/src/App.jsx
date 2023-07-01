import { useRoutes } from 'react-router-dom'
import Customers from './pages/Customers'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Invoices from './pages/Invoices'
import Layout from './pages/Layout'
import Order from './pages/Order'
import Products from './pages/Products'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Admin from './pages/Admin'

function App() {
  const routes= useRoutes([
    {
      path : '/',
      element : <Layout/>,
      children : [
        {
          index : true,
          element : <Home/>
        },
        {
          path : '/admin',
          element : <Admin/>
        },
        {
          path : '/dashboard',
          element : <Dashboard/>
        },
        {
          path : '/products',
          element : <Products/>
        },
        {
          path : '/order',
          element : <Order/>
        },
        {
          path : '/invoices',
          element : <Invoices/>
        },
        {
          path : '/customers',
          element : <Customers/>
        },
        {
          path : '/signup',
          element : <Signup/>
        },
        {
          path : '/signin',
          element : <Signin/>
        }
      ]
    }
  ])

  return routes
}

export default App

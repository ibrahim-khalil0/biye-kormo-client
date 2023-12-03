import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root/Root';
import Home from './pages/Home/Home';
import BioData from './pages/BioData/AllBioData';
import BiodataDetails from './pages/BioDataDetails/BiodataDetails';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProviders from './Providers/AuthProviders';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Checkout from './pages/Checkout/Checkout';
import Dashboard from './layouts/Dashboard/Dashboard';
import AdminDashboard from './dashboardPages/AdminPages/AdminDashboard';
import Biodata from './dashboardPages/UserPages/SelfBiodata';
import EditBiodata from './dashboardPages/UserPages/EditBiodata';
import MyContactRequest from './dashboardPages/UserPages/MyContactRequest';
import Favorite from './dashboardPages/UserPages/Favorite';
import ManageUsers from './dashboardPages/AdminPages/ManageUsers';
import ApprovedPremium from './dashboardPages/AdminPages/ApprovedPremium';
import ContactRequestApproved from './dashboardPages/AdminPages/ContactRequest';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import About from './pages/About/About';
import AdminRoute from './AdminRoute/AdminRoute';
import UserRoute from './UserRoute/UserRoute';

const queryClient = new QueryClient()




const route = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/biodatas',
        element: <BioData></BioData>
      },
      {
        path: `/checkout/:id`,
        element: <Checkout></Checkout>
      },
      {
        path: '/biodata/:id',
        element: <PrivateRoute><BiodataDetails></BiodataDetails></PrivateRoute>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },


  // dashboard related path 
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'biodata',
        element: <UserRoute><Biodata></Biodata></UserRoute>
      },
      {
        path: 'edit',
        element: <UserRoute><EditBiodata></EditBiodata></UserRoute>
      },
      {
        path: 'contactRequest',
        element: <UserRoute><MyContactRequest></MyContactRequest></UserRoute>
      },
      {
        path: 'favorite',
        element: <UserRoute><Favorite></Favorite></UserRoute>
      },
      {
        path: 'admin',
        element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
      },
      {
        path: 'manageUser',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'premiumRequest',
        element: <AdminRoute><ApprovedPremium></ApprovedPremium></AdminRoute>
      },
      {
        path: 'contactRequestApproved',
        element: <AdminRoute><ContactRequestApproved></ContactRequestApproved></AdminRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <AuthProviders>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={route}></RouterProvider>
        </QueryClientProvider>
        
      </AuthProviders>

  </React.StrictMode>,
)

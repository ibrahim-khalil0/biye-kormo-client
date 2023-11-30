import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root/Root';
import Home from './pages/Home/Home';
import BioData from './pages/Biodata/Biodata';
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

const isPremium = true



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
        path: '/biodataDetails',
        element: <PrivateRoute><BiodataDetails></BiodataDetails></PrivateRoute>
      }
    ]
  },


  // dashboard related path 
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard',
        element: isPremium ? <AdminDashboard></AdminDashboard> : <Biodata></Biodata>
      },
      {
        path: 'biodata',
        element: <Biodata></Biodata>
      },
      {
        path: 'edit',
        element: <EditBiodata></EditBiodata>
      },
      {
        path: 'contactRequest',
        element: <MyContactRequest></MyContactRequest>
      },
      {
        path: 'favorite',
        element: <Favorite></Favorite>
      },
      {
        path: 'admin',
        element: <AdminDashboard></AdminDashboard>
      },
      {
        path: 'manageUser',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'premiumRequest',
        element: <ApprovedPremium></ApprovedPremium>
      },
      {
        path: 'contactRequestApproved',
        element: <ContactRequestApproved></ContactRequestApproved>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <AuthProviders>
        <RouterProvider router={route}></RouterProvider>
      </AuthProviders>

  </React.StrictMode>,
)

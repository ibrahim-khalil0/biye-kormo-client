import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import axios from 'axios';

const NormalUser = ({children}) => {
    const {user} = useContext(AuthContext)
    const [checkAdmin, setCheckAdmin] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        axios(`https://biye-kormo-server.vercel.app/biodata/${user?.email}`)
        .then(res => {
          setCheckAdmin(res.data)
          setLoading(false)
        })
      }, [])


   
    if(loading){
        return <span className="">Loading</span>
    }
    if(!checkAdmin.isAdmin){
        return children
    }
    return <Navigate to={'/'}></Navigate>;
};

export default NormalUser;
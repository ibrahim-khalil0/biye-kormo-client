import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import axios from 'axios';

const Header = () => {
    const {user} = useContext(AuthContext)
    const [checkAdmin, setCheckAdmin] = useState({})

    useEffect( () => {
        axios(`https://biye-kormo-server.vercel.app/biodata/${user?.email}`)
        .then(res => {
          setCheckAdmin(res.data)
        })
      }, [user])


    return (
        <div className='sm:flex justify-between items-center'>
            <div className='flex justify-center sm:justify-start items-center gap-1'>
                <img src="https://i.ibb.co/Kmphzg1/logo-b.png" alt="" className='rounded-md w-16' />
                <h3 className='logo uppercase text-lg font-normal'><span className='text-[#000000a1] mr-2'>Biye</span><span className='text-[#C48C46]'>kormo</span></h3>
            </div>
            <div className='flex justify-center sm:justify-end gap-5 sm:gap-10 text-lg text-[#66451c] font-medium flex-wrap'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/biodatas'}>Biodatas</NavLink>
                <NavLink to={'/about'}>About Us</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                {
                    user ? <NavLink to={checkAdmin.isAdmin ? '/dashboard/admin' : '/dashboard/biodata'}>Dashboard</NavLink> : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
    }
    const isPremium = true
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
                    user ? <NavLink to={'/dashboard'}>Dashboard</NavLink> : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;
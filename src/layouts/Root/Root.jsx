import React from 'react';
import Header from '../../sharedComponents/Header/Header';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Footer from '../../sharedComponents/Footer/Footer';

const Root = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div className='max-w-[1600px] mx-auto'>
            {
                noHeaderFooter || <div className='px-[5%] lg:px-[8%] shadow-md shadow-[#00000012] py-4'>
                <Header></Header>
                
            </div>
            }
            <Outlet></Outlet>
            {
                noHeaderFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Root;
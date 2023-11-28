import React from 'react';
import Header from '../../sharedComponents/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../sharedComponents/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-[1600px] mx-auto'>
            <div className='px-[5%] lg:px-[8%] shadow-md shadow-[#00000012] py-4'>
                <Header></Header>
                
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
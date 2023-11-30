import React from 'react';
import PageHeading from '../dashboardComponents/PageHeading';

const Biodata = () => {
    return (
        <div>
            <PageHeading tittle={'Your Biodata'} image={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}></PageHeading>

            <div className='bg-white px-10 py-10 rounded-md flex text-center'>
                <div className='flex-1'>
                    <h1 className='text-3xl mb-4'>Personal Information</h1>
                    <div className='space-y-4'>
                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>ID</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>1</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Name</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>Ibrahim Khalil</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Gender</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>Male</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Height</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>6 inch</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Weight</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>35 kg</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Age</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>23 Years</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Race</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>Student</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Occupation</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>Student</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Date of birth</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>12 - 12 - 2023</p></p>
                        
                    </div>
                </div>
                <div className='flex-1'>
                    <h1 className='text-3xl mb-4'>Others Information</h1>
                    <div className='space-y-4'>
                        <p className='flex'><p className='flex-1 text-right'>Fathers Name</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>Khalil Mia</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Mothers Name</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>Khalil Mia</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Permanent Division</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>Chattagram</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Present Division</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>Dhaka</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Expected Partner Age</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>18 Years</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Expected Partner Height</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>5 inch</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Expected Partner Weight</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>18 kg</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Contact Email</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>md@email.com</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Mobile Number</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>11111111111</p></p>
                    </div>
                </div>
            </div>
            <div className='bg-white text-center pb-4'>
                <button className='border border-[#9D6824] text-[#9D6824] hover:bg-[#9D6824] hover:text-white px-5 py-2 rounded-md'>Make Premium Biodata</button>
            </div>
        </div>
    );
};

export default Biodata;
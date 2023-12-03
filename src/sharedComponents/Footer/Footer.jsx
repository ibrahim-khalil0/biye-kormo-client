import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#E5E7EB] pt-20 border-t border-gray-500 text-black'>
            <div className='px-[5%] lg:px-[8%] sm:flex gap-8 items-center justify-between flex-wrap'>
                <div className='flex gap-2 items-center w-full lg:flex-1'>
                    <img src="https://i.ibb.co/Kmphzg1/logo-b.png" alt="" className='w-[100px]' />
                    <h1 className='text-3xl'>Biye Kormo</h1>
                </div>
                <div className='flex-1 flex justify-between mt-8 sm:mt-0'>
                    <div className='space-y-3'>
                        <p><Link to={'/'}>Home</Link></p>
                        <p><Link to={'/biodatas'}>Biodatas</Link></p>
                        <p><Link to={'#'}>Help and Support</Link></p>
                       
                    </div>
                    <div className='space-y-3'>
                        <p><Link to={'/about'}>About Us</Link></p>
                        <p><Link to={'contactUs'}>Contact Us</Link></p>
                        <p><Link to={'#'}>Privacy Policy</Link></p>
                       
                    </div>
                </div>
                <div className='flex-1 text-center sm:text-right mt-8 sm:mt-0'>
                    <h2 className='text-2xl mb-3'>Subscribe Our Newsletter</h2>
                    <form>
                        <input type="email" name="" id="" placeholder='Your Email' className='border text-lg  rounded-l-md px-3 py-2' />
                        <button className="bg-[#9D6824] text-white px-3 py-3 rounded-r-md"><IoIosSend></IoIosSend></button>
                    </form>
                    <h2 className='text-2xl my-3'>Connect With Social Media</h2>
                    <div className="flex justify-center sm:justify-end gap-3">
                        <FaFacebookF className="bg-[#9D6824] text-white hover:text-[#9D6824] hover:bg-white rounded-lg w-[40px] h-[40px] p-2"></FaFacebookF>
                        <FaTwitter className="bg-[#9D6824] text-white hover:text-[#9D6824] hover:bg-white rounded-lg w-[40px] h-[40px] p-2"></FaTwitter>
                        <FaInstagram className="bg-[#9D6824] text-white hover:text-[#9D6824] hover:bg-white rounded-lg w-[40px] h-[40px] p-2"></FaInstagram>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white px-[5%] lg:px[8%] mt-20 flex justify-between">
                <p>©Copyright Biye Kormo 2023</p>
                <p>Developed By Programming Hero</p>
            </div>
        </div>
    );
};

export default Footer;
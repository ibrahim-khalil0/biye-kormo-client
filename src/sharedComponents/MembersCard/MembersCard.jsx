import React from 'react';
import { Link } from 'react-router-dom';

const MembersCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-8 w-80 text-center text-gray-600">
            <span className="block mb-2"><b>Biodata Id:</b> 1</span>
            <span className="block text-[#CF902B] mb-2">Male</span>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Profile Image"
              className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
            />
            <span className="block mb-2"><b>Division:</b> Dhaka</span>
            <span className="block mb-2"><b>Age:</b> 23</span>
            <span className="block mb-2">
              <b>Occupation:</b> Student
            </span>
            <Link to={'/'}><button className="bg-[#9D6824] text-white px-4 py-2 rounded-full font-bold hover:bg-[#F4C02A]">
              View Profile
            </button></Link>
          </div>
    );
};

export default MembersCard;
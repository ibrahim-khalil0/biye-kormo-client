import React, { useContext, useEffect, useState } from 'react';
import PageHeading from '../dashboardComponents/PageHeading';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProviders';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import swal from 'sweetalert';


const Biodata = () => {

    const [singleBiodata, setSingleBiodata] = useState({})
    const [isPremium, setIsPremium] = useState(false)
    const {user} = useContext(AuthContext)

    useEffect( () => {
        axios(`https://biye-kormo-server.vercel.app/biodata/${user?.email}`)
        .then(res => {
          setSingleBiodata(res.data)
        setIsPremium(res.data.isPremium)
        })
      }, [user])
      
      const {name, biodataType, profileImage, dateOfBirth, height, weight, age, occupation, race, fathersName, mothersName, permanentDivision, presentDivision, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, contactEmail, mobileNumber, biodataId} = singleBiodata


    //   update premium member 
      const axiosSecure = useAxiosSecure()
      const updatePremium = () => {
        swal({
            title: "",
            text: "Are you sure to make your biodata premium?",
            icon: "",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axiosSecure.put(`/premium/${contactEmail}`)
                .then(res => {
                    setIsPremium('pending')
                })
              swal("Please Wait For Admin Approval", {
                icon: "success",
              });
            }
          });
        
      }

    return (
        <div>
            <PageHeading tittle={'Your Biodata'} image={profileImage}></PageHeading>

            <div className='bg-white px-10 py-10 rounded-md flex text-center'>
                <div className='flex-1'>
                    <h1 className='text-3xl mb-4'>Personal Information</h1>
                    <div className='space-y-4'>
                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>ID</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{biodataId}</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Name</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{name}</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Gender</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{biodataType}</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Height</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{height}</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Weight</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{weight}</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Age</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{age} Years</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Race</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{race}</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Occupation</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{occupation}</p></p>

                        <p className='border-r border-[#9D6824] flex'><p className='flex-1 text-right'>Date of birth</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{dateOfBirth}</p></p>
                        
                    </div>
                </div>
                <div className='flex-1'>
                    <h1 className='text-3xl mb-4'>Others Information</h1>
                    <div className='space-y-4'>
                        <p className='flex'><p className='flex-1 text-right'>Fathers Name</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{fathersName}</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Mothers Name</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{mothersName}</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Permanent Division</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{permanentDivision}</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Present Division</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{presentDivision}</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Expected Partner Age</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{expectedPartnerAge} Years</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Expected Partner Height</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{expectedPartnerHeight}</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Expected Partner Weight</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{expectedPartnerWeight}</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Contact Email</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{contactEmail}</p></p>

                        <p className='flex'><p className='flex-1 text-right'>Mobile Number</p> <p className='w-5'>:</p> <p className='flex-1 text-left'>{mobileNumber}</p></p>
                    </div>
                </div>
            </div>
            
            <div onClick={updatePremium} className='bg-white text-center pb-4'>
            {
                isPremium ? isPremium == 'pending' ? <h1 className='text-4xl'>Your Premium Request Is Pending</h1> : isPremium == 'accepted' ? <h1 className='text-4xl'>Your Biodata Is Premium</h1> : <div><h1 className='text-2xl'>Your Request Is Cancelled</h1><button className='border border-[#9D6824] text-[#9D6824] hover:bg-[#9D6824] hover:text-white px-5 py-2 rounded-md'>Send Request Again</button></div> : <button className='border border-[#9D6824] text-[#9D6824] hover:bg-[#9D6824] hover:text-white px-5 py-2 rounded-md'>Make Premium Biodata</button>
            }
            </div>
        </div>
    );
};

export default Biodata;
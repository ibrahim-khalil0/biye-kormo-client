import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe('pk_test_51OJ8WDJUPNMPvH1OKBZHeVzTYvgpP5UMWqVaCCu1pKdbubn1WFvmNWkLcxSEi4oM1sxqcfHgThfsqDwm1adUFBA100azQk00cC')

const Checkout = () => {

  const [selfBiodata, setSelfBiodata] = useState({})
  const [contactBiodata, setContactBiodata] = useState({})
  const {user} = useContext(AuthContext)
  const {id} = useParams()



  useEffect( () => {
    axios(`https://biye-kormo-server.vercel.app/biodata/${user?.email}`)
    .then(res => {
      setSelfBiodata(res.data)
    })
  }, [user])

  useEffect( () => {
    axios(`https://biye-kormo-server.vercel.app/singleData/${id}`)
    .then(res => {
      setContactBiodata(res.data)
    })
  }, [])


  const handleContactRequest = e => {
    
    contactBiodata.requesterEmail = selfBiodata.contactEmail
    contactBiodata.requesterName = selfBiodata.name
    contactBiodata.requesterBiodataId = selfBiodata.biodataId
    contactBiodata.status = 'pending'
    delete contactBiodata._id
    contactBiodata._id = selfBiodata.contactEmail + contactBiodata.biodataId


    axios.post('https://biye-kormo-server.vercel.app/contactRequest', contactBiodata)
  
  }




  return (
    <div className="bg-gray-100 px-[5%] lg:px-[8%] py-16">
        <div>
            <h1 className="text-5xl lg:text-8xl font-semibold text-center mb-5">Checkout</h1>
        </div>
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-1/2">
          {/* <form onSubmit={handleContactRequest}> */}

            <div className="mb-4">
              <label
                htmlFor="biodataId"
                className="block text-sm font-semibold text-gray-600"
              >
                Biodata ID (Who you need to contact)
              </label>
              <input
                type="text"
                id="biodataId"
                name="biodataId"
                readOnly
                value={contactBiodata.biodataId}
                className="form-input mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="selfBiodataId"
                className="block text-sm font-semibold text-gray-600"
              >
                Self Biodata ID
              </label>
              <input
                type="text"
                id="selfBiodataId"
                name="selfBiodataId"
                readOnly
                value={selfBiodata.biodataId ? selfBiodata.biodataId : "Please Add Your Biodata"}
                className="form-input mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="selfEmail"
                className="block text-sm font-semibold text-gray-600"
              >
                Self Email
              </label>
              <input
                type="text"
                id="selfEmail"
                name="selfEmail"
                readOnly
                value={user?.email}
                className="form-input mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="mb-4 payment">
              <Elements stripe={stripePromise}>
                <CheckoutForm contactRequest={handleContactRequest}></CheckoutForm>
              </Elements>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;

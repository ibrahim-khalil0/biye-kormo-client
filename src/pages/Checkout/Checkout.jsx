import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";

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
    e.preventDefault()
    
    contactBiodata.requesterEmail = selfBiodata.contactEmail
    contactBiodata.requesterName = selfBiodata.name
    contactBiodata.requesterBiodataId = selfBiodata.biodataId
    contactBiodata.status = 'pending'
    delete contactBiodata._id
    contactBiodata._id = selfBiodata.contactEmail + contactBiodata.biodataId

    console.log(contactBiodata)
    console.log(selfBiodata.contactEmail)

    axios.post('https://biye-kormo-server.vercel.app/contactRequest', contactBiodata)
    .then(res => {
      console.log(res.data)
    })
  }


  return (
    <div className="bg-gray-100 px-[5%] lg:px-[8%] py-16">
        <div>
            <h1 className="text-5xl lg:text-8xl font-semibold text-center mb-5">Checkout</h1>
        </div>
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-1/2">
          <form onSubmit={handleContactRequest}>
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

            <div className="mb-4">
              <label
                htmlFor="stripeCardNumber"
                className="block text-sm font-semibold text-gray-600"
              >
                Stripe Card Number
              </label>
              <input
                type="text"
                id="stripeCardNumber"
                name="stripeCardNumber"
                className="form-input mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProviders";
import swal from "sweetalert";

const BiodataDetails = () => {

  const [singleBiodata, setSingleBiodata] = useState({})
  const {id} = useParams()
  const {user} = useContext(AuthContext)



  const axiosSecure = useAxiosSecure()
  useEffect( () => {
    axiosSecure(`/singleData/${id}`)
    .then(res => {
      setSingleBiodata(res.data)
    })
  }, [id])

  const {name, biodataType, profileImage, dateOfBirth, height, weight, age, occupation, race, fathersName, mothersName, permanentDivision, presentDivision, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, contactEmail, mobileNumber, biodataId} = singleBiodata



  // load similer biodata 
  const [similer, setSimiler] = useState([])

  useEffect( () => {
    axiosSecure(`sortType/${biodataType}`)
    .then(res => {
      const total = res.data.filter(data => data.biodataId != biodataId)
      setSimiler(total)
    })
  }, [biodataType, id, biodataId])



  const [checkPremium, setCheckPremium] = useState({})

  useEffect( () => {
    axios(`https://biye-kormo-server.vercel.app/biodata/${user?.email}`)
    .then(res => {
      setCheckPremium(res.data)
    })
  }, [user])



  const handleFavorite = () => {

    singleBiodata.userEmail = user.email
    singleBiodata._id = user.email + biodataId

    axios.post('https://biye-kormo-server.vercel.app/favorite', singleBiodata)
    .then(res => {
      swal("", "You Added The Biodata in Favorite", "success");
    })
  }

  return (
    <div className="px-[5%] lg:px-[8%] py-20">
      <div className="lg:flex bg-[#FDFCF7] rounded-r-md">
        {/* Left Side - Biodata Details */}
        <div className="lg:w-2/3 sm:flex">
          <div className="sm:w-1/2">
            <img
              src={profileImage}
              className="max-h-[500px] h-full w-full rounded-l-md"
            />
          </div>
          <div className="sm:w-1/2 pl-5 pt-4 text-center sm:text-left">
            <p>
              <strong>Name : </strong> {name}
            </p>
            <p>
              <strong>Gender : </strong> {biodataType}
            </p>

            <p>
              <strong>Height : </strong> {height}
            </p>

            <p>
              <strong>Age : </strong> {age} Years
            </p>
            <p>
              <strong>Weight : </strong> {weight}
            </p>
            <p>
              <strong>Race:</strong> {race}
            </p>
            <p>
              <strong>Date of Birth : </strong> {dateOfBirth}
            </p>
            <p>
              <strong>Occupation : </strong> {occupation}
            </p>
            <hr className="w-1/2 border-[#F9C030] my-2 mx-auto sm:mx-0" />
            <p>
              <strong>Father's Name : </strong> {fathersName}
            </p>
            <p>
              <strong>Mother's Name : </strong> {mothersName}
            </p>
            <p>
              <strong>Permanent Division : </strong> {permanentDivision}
            </p>
            <p>
              <strong>Present Division : </strong> {presentDivision}
            </p>
            <hr className="w-1/2 border-[#F9C030] my-2 mx-auto sm:mx-0" />
            <p>
              <strong>Expected Partner Age : </strong>
              {expectedPartnerAge} Years
            </p>
            <p>
              <strong>Expected Partner Height : </strong>
              {expectedPartnerHeight}
            </p>
            <p>
              <strong>Expected Partner Weight : </strong>
              {expectedPartnerWeight}
            </p>
            <hr className="w-1/2 border-[#F9C030] my-2 mx-auto sm:mx-0" />

            {checkPremium.isPremium == "accepted" ? 
              <div>
                <p>
                  <strong>Email : </strong> {contactEmail}
                </p>
                <p>
                  <strong>Phone : </strong> {mobileNumber}
                </p>
              </div>
             : 
              <Link to={`/checkout/${biodataId}`}><button className="bg-[#9D6824] text-white py-2 px-4 rounded-full hover:bg-[#F4C02A] mb-2">
              Request Contact Info
            </button></Link>
            }

            <div>
            <button onClick={handleFavorite} className="bg-[#9D6824] text-white py-2 px-4 rounded-full mr-4 hover:bg-[#F4C02A]">
              Add to Favorites
            </button>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 bg-white shadow-lg">
          <h2 className="text-3xl font-bold my-6 text-[#9D6824] text-center">
            Similar Biodata
          </h2>

          <div className="p-4 grid md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 text-center gap-5">
            {
              similer.map(data => <Link key={data._id} to={`/biodata/${data.biodataId}`}>
              <div className="shadow-lg py-5 rounded-md">
              <img
                src={data.profileImage}
                alt="Similar Biodata"
                className="w-16 h-16 rounded-full mb-4 inline"
              />
              <p className="text-lg font-semibold">{data.name}</p>
              <p>
                <strong>Age:</strong> {data.age}
              </p>
              <p>
                <strong>Occupation:</strong> {data.occupation}
              </p>
              </div>
            </Link>)
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataDetails;

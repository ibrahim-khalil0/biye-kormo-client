import React from "react";
import { Link } from "react-router-dom";

const BiodataDetails = () => {
  const biodata = {
    gender: "Male",
    name: "John Doe",
    profileImage: "https://via.placeholder.com/150",
    dateOfBirth: "01/01/1990",
    height: "5'10\"",
    weight: "160 lbs",
    age: 32,
    occupation: "Software Engineer",
    race: "Caucasian",
    fathersName: "Michael Doe",
    mothersName: "Mary Doe",
    permanentDivision: "Dhaka",
    presentDivision: "Dhaka",
    expectedPartnerAge: "25-35",
    expectedPartnerHeight: "5'5\" - 6'0\"",
    expectedPartnerWeight: "120 lbs - 180 lbs",
    contactEmail: "john.doe@example.com",
    mobileNumber: "+1234567890",
  };

  const isPremium = true;
  return (
    <div className="px-[5%] lg:px-[8%] py-20">
      <div className="lg:flex bg-[#FDFCF7] rounded-r-md">
        {/* Left Side - Biodata Details */}
        <div className="lg:w-2/3 sm:flex">
          <div className="sm:w-1/2">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="max-h-[500px] h-full w-full rounded-l-md"
            />
          </div>
          <div className="sm:w-1/2 pl-5 pt-4 text-center sm:text-left">
            <p>
              <strong>Gender : </strong> {biodata.gender}
            </p>

            <p>
              <strong>Height : </strong> {biodata.height}
            </p>

            <p>
              <strong>Age : </strong> {biodata.age} Years
            </p>
            <p>
              <strong>Weight : </strong> {biodata.weight}
            </p>
            <p>
              <strong>Race:</strong> {biodata.race}
            </p>
            <p>
              <strong>Date of Birth : </strong> {biodata.dateOfBirth}
            </p>
            <p>
              <strong>Occupation : </strong> {biodata.occupation}
            </p>
            <hr className="w-1/2 border-[#F9C030] my-2 mx-auto sm:mx-0" />
            <p>
              <strong>Father's Name : </strong> {biodata.fathersName}
            </p>
            <p>
              <strong>Mother's Name : </strong> {biodata.mothersName}
            </p>
            <p>
              <strong>Permanent Division : </strong> {biodata.permanentDivision}
            </p>
            <p>
              <strong>Present Division : </strong> {biodata.presentDivision}
            </p>
            <hr className="w-1/2 border-[#F9C030] my-2 mx-auto sm:mx-0" />
            <p>
              <strong>Expected Partner Age : </strong>
              {biodata.expectedPartnerAge} Years
            </p>
            <p>
              <strong>Expected Partner Height : </strong>
              {biodata.expectedPartnerHeight}
            </p>
            <p>
              <strong>Expected Partner Weight : </strong>
              {biodata.expectedPartnerWeight}
            </p>
            <hr className="w-1/2 border-[#F9C030] my-2 mx-auto sm:mx-0" />

            {isPremium ? 
              <div>
                <p>
                  <strong>Email : </strong> {biodata.contactEmail}
                </p>
                <p>
                  <strong>Phone : </strong> {biodata.mobileNumber}
                </p>
              </div>
             : 
              <button className="bg-[#9D6824] text-white py-2 px-4 rounded-full hover:bg-[#F4C02A] mb-2">
                Request Contact Info
              </button>
            }

            <div>
            <button className="bg-[#9D6824] text-white py-2 px-4 rounded-full mr-4 hover:bg-[#F4C02A]">
              Add to Favorites
            </button>
            </div>
          </div>
        </div>

        {/* Right Side - Similar Biodata based on Gender */}
        <div className="lg:w-1/3 bg-white shadow-lg">
          <h2 className="text-3xl font-bold my-6 text-[#9D6824] text-center">
            Similar Biodata
          </h2>
          {/* Hardcoded example of similar biodata (you can replace this with actual data fetching) */}
          <div className="p-4 grid md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 text-center gap-5">
            <Link to={'/'}>
            <div className="shadow-lg py-5 rounded-md">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Similar Biodata"
                className="w-16 h-16 rounded-full mb-4 inline"
              />
              <p className="text-lg font-semibold">Jane Doe</p>
              <p>
                <strong>Age:</strong> 28
              </p>
              <p>
                <strong>Occupation:</strong> Doctor
              </p>
            </div>
            </Link>

            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Similar Biodata"
                className="w-16 h-16 rounded-full mb-4 inline"
              />
              <p className="text-lg font-semibold">Jane Doe</p>
              <p>
                <strong>Age:</strong> 28
              </p>
              <p>
                <strong>Occupation:</strong> Doctor
              </p>
            </div>

            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Similar Biodata"
                className="w-16 h-16 rounded-full mb-4 inline"
              />
              <p className="text-lg font-semibold">Jane Doe</p>
              <p>
                <strong>Age:</strong> 28
              </p>
              <p>
                <strong>Occupation:</strong> Doctor
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Similar Biodata"
                className="w-16 h-16 rounded-full mb-4 inline"
              />
              <p className="text-lg font-semibold">Jane Doe</p>
              <p>
                <strong>Age:</strong> 28
              </p>
              <p>
                <strong>Occupation:</strong> Doctor
              </p>
            </div>
          </div>
          {/* Add more similar biodata cards */}
        </div>
      </div>
    </div>
  );
};

export default BiodataDetails;

import React, { useEffect, useState } from "react";
import MembersCard from "../../sharedComponents/MembersCard/MembersCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BioData = () => {
  const [biodatas, setBiodatas] = useState([]);
  const axiosSecure = useAxiosSecure();

  const [ageRangeValue, setAgeRangeValue] = useState(0)
  const [type, setType] = useState('Default')
  const [division, setDivision] = useState('Default')

  useEffect(() => {
    axiosSecure.get(`/allBiodata`)
    .then((res) => {
      setBiodatas(res.data);
    });
  }, []);


 
  const handleAgeRange = e => {
    const age = e.target.value
    setAgeRangeValue(age)

    if(age > 0 && type == 'Default' && division == 'Default'){
      axiosSecure.get(`/allBiodata/${age}`)
      .then((res) => {
        setBiodatas(res.data);
      })
    } else if (age > 0 && type != 'Default' && division == 'Default'){
      axiosSecure.get(`/allBiodata/${age}/${type}`)
      .then((res) => {
        setBiodatas(res.data);
      })

    } else if (age > 0 && type != 'Default' && division != 'Default'){
      axiosSecure.get(`/allBiodata/${age}/${type}/${division}`)
      .then((res) => {
        setBiodatas(res.data);
      })
    }

  }
  
  const handleType = e => {
    const biodataType = e.target.value
    setType(biodataType)


    if(ageRangeValue == 0 && division == 'Default'){
      axiosSecure.get(`/sortType/${biodataType}`)
      .then((res) => {
        setBiodatas(res.data);
      })
    } else if(ageRangeValue > 0 && division == 'Default') {
      axiosSecure.get(`/allBiodata/${ageRangeValue}/${biodataType}`)
      .then((res) => {
        setBiodatas(res.data);
      })
    } else if (ageRangeValue == 0 && division != 'Default') {
      axiosSecure.get(`/typeDivision/${biodataType}/${division}`)
      .then((res) => {
        setBiodatas(res.data);
      })
    } else if (ageRangeValue > 0 && division != 'Default'){
      axiosSecure.get(`/allBiodata/${ageRangeValue}/${biodataType}/${division}`)
      .then((res) => {
        setBiodatas(res.data);
      })
    }

  }
  
  const handleDivision = e => {
    const permanentDivision = e.target.value
    setDivision(permanentDivision)


    if(ageRangeValue == 0 && type == 'Default'){
      axiosSecure.get(`/sortDivision/${permanentDivision}`)
      .then((res) => {
        setBiodatas(res.data);
      })
    } else if(ageRangeValue > 0 && type == 'Default') {
      axiosSecure.get(`/ageDivision/${ageRangeValue}/${permanentDivision}`)
      .then((res) => {
        setBiodatas(res.data);
      })
    } else if (ageRangeValue == 0 && type != 'Default') {
      axiosSecure.get(`/typeDivision/${type}/${permanentDivision}`)
      .then((res) => {
        setBiodatas(res.data);
      })
    } else if (ageRangeValue > 0 && type != 'Default'){
      axiosSecure.get(`/allBiodata/${ageRangeValue}/${type}/${permanentDivision}`)
      .then((res) => {
        setBiodatas(res.data);
      })
    }

  }



  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            'url("https://t3.ftcdn.net/jpg/03/15/07/04/360_F_315070495_eCR5IjbhVfflbx4TPVLrjROgTEfMzjVU.jpg")',
        }}
      >
        <div className="bg-black py-40 bg-opacity-75">
          <h1 className="text-center text-white text-4xl sm:text-6xl lg:text-8xl font-semibold">
            Find Your{" "}
            <span className="text-[#FF0000]">
              Perfect <br /> Match
            </span>{" "}
            Here
          </h1>
        </div>
      </div>
      <div className="flex">
        <div className="flex-shrink-0 w-1/4 py-16 px-10 bg-gray-200">
          <div className="sticky top-5">
            <h2 className="text-2xl font-semibold mb-4">Filter Options</h2>

            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Age Range
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleAgeRange}
                    type="range"
                    className="block w-full rounded-md bg-white"
                    min="0"
                    max="60"
                    defaultValue="0"
                    name="age"
                  />
                </div>
                <p>{ageRangeValue}</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Biodata Type
                </label>
                <select
                onChange={handleType}
                  defaultValue="Default"
                  className="block w-full mt-1 rounded-md bg-white py-3 outline-0"
                  name="biodataType"
                >
                  <option disabled value="Default">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Division
                </label>
                <select
                onChange={handleDivision}
                  defaultValue="Default"
                  className="block w-full mt-1 rounded-md bg-white py-3 outline-0"
                  name="division"
                  
                >
                  <option disabled value="Default">Select</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattagram">Chattagram</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Maymansign">Maymansign</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        <div className="flex-grow px-[2%] py-16 bg-white">
          <h2 className="text-2xl font-semibold mb-10">All Created Biodatas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {biodatas.map((data) => (
              <MembersCard key={data._id} data={data}></MembersCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioData;

import React from "react";
import MembersCard from "../../sharedComponents/MembersCard/MembersCard";

const BioData = () => {
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

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Age Range
              </label>
              <div className="mt-1">
                <input
                  type="range"
                  className="block w-full rounded-md bg-white"
                  min="18"
                  max="60"
                  defaultValue="18"
                  name="age"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Biodata Type
              </label>
              <select defaultValue="default" className="block w-full mt-1 rounded-md bg-white py-3 outline-0">
                <option disabled value="default">
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Division
              </label>
              <select defaultValue="default" className="block w-full mt-1 rounded-md bg-white py-3 outline-0">
                <option disabled value="default">
                  Select Division
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Maymansign">Maymansign</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex-grow px-[2%] py-16 bg-white">
          <h2 className="text-2xl font-semibold mb-10">All Created Biodatas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <MembersCard></MembersCard>
            <MembersCard></MembersCard>
            <MembersCard></MembersCard>
            <MembersCard></MembersCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioData;

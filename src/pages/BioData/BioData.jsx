import React from 'react';
import MembersCard from '../../sharedComponents/MembersCard/MembersCard';

const BioData = () => {
    return (
        <div className="flex">
        {/* Filter Section */}
        <div className="flex-shrink-0 w-1/4 p-4 bg-gray-200">
          <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
  
          {/* Age Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Age Range</label>
            <div className="mt-1">
              {/* Age Range Input */}
              <input
                type="range"
                className="block w-full rounded-md bg-blue-100"
                min="18"
                max="60"
                defaultValue="18"
                name='age'
              />
            </div>
          </div>
  
          {/* Biodata Type Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Biodata Type</label>
            <select className="block w-full mt-1 rounded-md bg-blue-100">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
  
          {/* Division Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Division</label>
            <select className="block w-full mt-1 rounded-md bg-blue-100">
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
  
        {/* Biodata List Section */}
        <div className="flex-grow p-4 bg-white">
          <h2 className="text-2xl font-semibold mb-4">All Created Biodatas</h2>
  
          {/* Single Biodata */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <MembersCard></MembersCard>
            <MembersCard></MembersCard>
            <MembersCard></MembersCard>
            <MembersCard></MembersCard>
          </div>
        </div>
      </div>
    );
};

export default BioData;
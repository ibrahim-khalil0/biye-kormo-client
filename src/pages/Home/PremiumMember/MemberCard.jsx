import { Link } from "react-router-dom";

const MemberCard = ({biodata}) => {

  const {biodataId, biodataType, permanentDivision, age, occupation, profileImage} = biodata
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-8 w-80 text-center text-gray-600">
          
            <span className="block mb-2"><b>Biodata Id:</b> {biodataId}</span>
            <span className="block text-[#CF902B] mb-2">{biodataType}</span>
            <img
              src={profileImage}
              alt="Profile Image"
              className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
            />
            <span className="block mb-2"><b>Division:</b> {permanentDivision}</span>
            <span className="block mb-2"><b>Age:</b> {age}</span>
            <span className="block mb-2">
              <b>Occupation:</b> {occupation}
            </span>
            <Link to={`/biodata/${biodataId}`}><button className="bg-[#9D6824] text-white px-4 py-2 rounded-full font-bold hover:bg-[#F4C02A]">
              View Profile
            </button></Link>
          </div>
    );
};

export default MemberCard;
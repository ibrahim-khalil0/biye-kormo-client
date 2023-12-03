import { useContext, useEffect, useState } from "react";
import PageHeading from "../dashboardComponents/PageHeading";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import swal from "sweetalert";

const EditBiodata = () => {
  const [singleBiodata, setSingleBiodata] = useState({})
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure()

  useEffect( () => {
    axios(`https://biye-kormo-server.vercel.app/biodata/${user?.email}`)
    .then(res => {
      setSingleBiodata(res.data)
    })
  }, [user])
  
  const {name, biodataType, profileImage, dateOfBirth, height, weight, age, occupation, race, fathersName, mothersName, permanentDivision, presentDivision, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, contactEmail, mobileNumber} = singleBiodata


  const handleAddBiodata = e => {
    e.preventDefault()

    const form = e.target

    const name = form.name.value
    const biodataType = form.biodataType.value
    const profileImage = form.profileImage.value
    const dateOfBirth = form.dateOfBirth.value
    const height = form.height.value
    const weight = form.weight.value
    const age = form.age.value
    const occupation = form.occupation.value
    const race = form.race.value
    const fathersName = form.fathersName.value
    const mothersName = form.mothersName.value
    const permanentDivision = form.permanentDivision.value
    const presentDivision = form.presentDivision.value
    const expectedPartnerAge = form.expectedPartnerAge.value
    const expectedPartnerHeight = form.expectedPartnerHeight.value
    const expectedPartnerWeight = form.expectedPartnerWeight.value
    const contactEmail = form.contactEmail.value
    const mobileNumber = form.mobileNumber.value

    const biodata = {name, biodataType, profileImage, dateOfBirth, height, weight, age, occupation, race, fathersName, mothersName, permanentDivision, presentDivision, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, contactEmail, mobileNumber}


    if(singleBiodata.name){
      // update bio data 
      axiosSecure.put(`/updateBiodata/${singleBiodata.contactEmail}`, biodata)
      .then(res => {
        console.log(res.data)
        swal("", "Data Saved Successfully", "success");
    })
    } else {
      // add bio data 
      axiosSecure.post('/biodata', biodata)
      .then(res => {
        console.log(res.data)
        swal("", "Data Saved Successfully", "success");
    })
    }

  }
  


  return (
    <div>
      <PageHeading
        tittle={"Edit Biodata"}
        image={profileImage}
      ></PageHeading>

      <div className="bg-white px-10 py-10 rounded-md text-center">
        <form onSubmit={handleAddBiodata} className="grid grid-cols-2 gap-10 rounded-md py-3">
          <div>
            <label>Biodata Type</label>
            <select
              name="biodataType"
              className="w-full p-2 rounded-md border"
              required
              defaultValue={biodataType ? biodataType : 'Select'}
            >
              <option disabled value={biodataType ? biodataType : 'Select'}>{biodataType ? biodataType : 'Select'}</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded-md border"
              defaultValue={name}
              required
            />
          </div>

          <div>
            <label>Profile Image Link</label>
            <input
              type="url"
              name="profileImage"
              defaultValue={profileImage}
              className="w-full p-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label>Date of birth</label>
            <input
              type="date"
              name="dateOfBirth"
              defaultValue={dateOfBirth}
              className="w-full p-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label>Height</label>
            <select
              name="height"
              className="w-full p-2 rounded-md border"
              required
              defaultValue={height ? height : 'Select Your Height'}
            >
              <option disabled value={height ? height : 'Select Your Height'}>{height ? height : 'Select Your Height'}</option>
              <option value="5 inch">5 inch</option>
              <option value="5.2 inch">5.2 inch</option>
              <option value="5.4 inch">5.4 inch</option>
              <option value="5.6 inch">5.6 inch</option>
              <option value="5.8 inch">5.8 inch</option>
              <option value="6 inch">6 inch</option>
            </select>
          </div>

          <div>
            <label>Weight</label>
            <select
              name="weight"
              className="w-full p-2 rounded-md border"
              defaultValue={ weight ? weight : 'Select Your Weight'}
              required
            >
              <option disabled value={ weight ? weight : 'Select Your Weight'}>{ weight ? weight : 'Select Your Weight'}</option>
              <option value="40 - 45 kg">40 - 45 kg</option>
              <option value="46 - 50 kg">46 - 50 kg</option>
              <option value="51 - 55 kg">51 - 55 kg</option>
              <option value="56 - 60 kg">56 - 60 kg</option>
              <option value="61 - 65 kg">61 - 65 kg</option>
              <option value="66 - 70 kg">66 - 70 kg</option>
              <option value="71 - 75 kg">71 - 75 kg</option>
              <option value="76 - 80 kg">76 - 80 kg</option>
            </select>
          </div>

          <div>
            <label>Age</label>
            <input
              type="number"
              name="age"
              defaultValue={age}
              className="w-full p-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label>Occupation</label>
            <select
              name="occupation"
              className="w-full p-2 rounded-md border"
              defaultValue={occupation ? occupation : 'Select Your Occupation'}
              required
            >
              <option disabled value={occupation ? occupation : 'Select Your Occupation'}>{occupation ? occupation : 'Select Your Occupation'}</option>
              <option value="Student">Student</option>
              <option value="Job">Job</option>
              <option value="House wife">House wife</option>
            </select>
          </div>

          <div>
            <label>Race</label>
            <select
              name="race"
              className="w-full p-2 rounded-md border"
              defaultValue={race ? race : 'Select Your Race'}
              required
            >
              <option disabled value={race ? race : 'Select Your Race'}>{race ? race : 'Select Your Race'}</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Government Job">Government Job</option>
              <option value="Business Man">Business Man</option>
            </select>
          </div>


          <div>
            <label>Fathers name</label>
            <input
              type="text"
              name="fathersName"
              defaultValue={fathersName}
              className="w-full p-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label>Mothers name</label>
            <input
              type="text"
              defaultValue={mothersName}
              name="mothersName"
              className="w-full p-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label>Permanent Division name</label>
            <select
              name="permanentDivision"
              className="w-full p-2 rounded-md border"
              defaultValue={permanentDivision ? permanentDivision : 'Select Permanent Division'}
              required
            >
              <option disabled value={ permanentDivision ? permanentDivision : 'Select Permanent Division'}>{ permanentDivision ? permanentDivision : 'Select Permanent Division'}</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattagram">Chattagram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Dhaka</option>
              <option value="Maymansign">Maymansign</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>

          <div>
            <label>Present Division name</label>
            <select
              name="presentDivision"
              className="w-full p-2 rounded-md border"
              defaultValue={presentDivision ? presentDivision : 'Select Present Division'}
              required
            >
              <option disabled value={ presentDivision ? presentDivision : 'Select Present Division'}>{ presentDivision ? presentDivision : 'Select Present Division'}</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattagram">Chattagram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Dhaka</option>
              <option value="Maymansign">Maymansign</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>

          <div>
            <label>Expected Partner Age</label>
            <input
              type="number"
              name="expectedPartnerAge"
              defaultValue={expectedPartnerAge}
              className="w-full p-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label>Expected Partner Height</label>
            <select
              name="expectedPartnerHeight"
              className="w-full p-2 rounded-md border"
              defaultValue={expectedPartnerHeight ? expectedPartnerHeight : 'Select Height'}
              required
            >
              <option disabled value={expectedPartnerHeight ? expectedPartnerHeight : 'Select Height'}>{expectedPartnerHeight ? expectedPartnerHeight : 'Select Height'}</option>
              <option value="5 inch">5 inch</option>
              <option value="5.2 inch">5.2 inch</option>
              <option value="5.4 inch">5.4 inch</option>
              <option value="5.6 inch">5.6 inch</option>
              <option value="5.8 inch">5.8 inch</option>
              <option value="6 inch">6 inch</option>
            </select>
          </div>

          <div>
            <label>Expected Partner Weight</label>
            <select
              name="expectedPartnerWeight"
              className="w-full p-2 rounded-md border"
              defaultValue={expectedPartnerWeight ? expectedPartnerWeight : 'Select Weight'}
              required
            >
              <option disabled value={expectedPartnerWeight ? expectedPartnerWeight : 'Select Weight'}>{expectedPartnerWeight ? expectedPartnerWeight : 'Select Weight'}</option>
              <option value="40 - 45 kg">40 - 45 kg</option>
              <option value="46 - 50 kg">46 - 50 kg</option>
              <option value="51 - 55 kg">51 - 55 kg</option>
              <option value="56 - 60 kg">56 - 60 kg</option>
              <option value="61 - 65 kg">61 - 65 kg</option>
              <option value="66 - 70 kg">66 - 70 kg</option>
              <option value="71 - 75 kg">71 - 75 kg</option>
              <option value="76 - 80 kg">76 - 80 kg</option>
            </select>
          </div>

          <div>
            <label>Contact Email</label>
            <input
              type="email"
              name="contactEmail"
              className="w-full p-2 rounded-md border"
              value={user?.email}
              readOnly
            />
          </div>

          <div>
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              defaultValue={mobileNumber}
              className="w-full p-2 rounded-md border"
              required
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-[#9D6824] text-white p-2 rounded-md"
            >
              Save And Publish Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBiodata;

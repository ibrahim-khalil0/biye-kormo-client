import PageHeading from "../dashboardComponents/PageHeading";

const EditBiodata = () => {
  return (
    <div>
      <PageHeading
        tittle={"Edit Biodata"}
        image={
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
      ></PageHeading>

      <div className="bg-white px-10 py-10 rounded-md text-center">
        <form className="grid grid-cols-2 gap-10 rounded-md py-3">
          <div>
            <label>Biodata Type</label>
            <select
              name="biodataType"
              className="w-full p-2 rounded-md border"
              required
              defaultValue='default'
            >
              <option disabled value="default">Select</option>
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
              required
            />
          </div>

          <div>
            <label>Profile Image Link or Image input</label>
            <input
              type="text"
              name="profileImage"
              className="w-full p-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label>Date of birth</label>
            <input
              type="date"
              name="dateOfBirth"
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
              defaultValue="default"
            >
              <option disabled value="default">Select Your Height</option>
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
              required
            >
              <option disabled value="default">Select Your Weight</option>
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
              className="w-full p-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label>Occupation</label>
            <select
              name="occupation"
              className="w-full p-2 rounded-md border"
              required
              defaultValue="default"
            >
              <option disabled value="default">Select Your Occupation</option>
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
              required
              defaultValue="default"
            >
              <option disabled value="default">Select Your Race</option>
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
              className="w-full p-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label>Mothers name</label>
            <input
              type="text"
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
              required
              defaultValue="default"
            >
              <option disabled value="default">Select Permanent Division</option>
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
              required
              defaultValue="default"
            >
              <option disabled value="default">Select Present Division</option>
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
              className="w-full p-2 rounded-md border"
              required
            />
          </div>

          <div>
            <label>Expected Partner Height</label>
            <select
              name="expectedPartnerHeight"
              className="w-full p-2 rounded-md border"
              required
              defaultValue="default"
            >
              <option disabled value="default">Select Height</option>
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
              required
            >
              <option disabled value="default">Select Weight</option>
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
              value="abc@gmail.com"
              readOnly
            />
          </div>

          <div>
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
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
